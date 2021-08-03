const Sample = require('./userModels');
const filter = { password: 0, __v: 0 }
const jwt = require('jsonwebtoken');
const md5 = require('blueimp-md5')

function checkFormat(data, type) {
  var regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,12}$/;
  var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
  if (type == 0) {
    if (!String(data).match(regPassword)) {
      return false;
    } else {
      return true;
    }
  } else {
    if (!String(data).match(regExEmail)) {
      return false;
    } else {
      return true;
    }
  }
}

function userDataFromDocument(doc) {
  return {
    username: doc.username,
    email: doc.email,
    isadmin: doc.isadmin,
    profile: doc.profile,
    favorites: doc.favorites,
    orders: doc.orders
  };
}

module.exports = (app) => {
  app.post('/signup', function (req, res) {
    let { email, username, password } = req.body;
    if (checkFormat(req.body.email, 1)) {
      if (checkFormat(req.body.password, 0)) {
        Sample.findOne({ email }, function (err, data) {
          if (data) {
            res.send({ code: 1, msg: 'Email already registered!' })
          } else {
            Sample.findOne({ username }, function (err, data) {
              if (data) {
                res.send({ code: 1, msg: 'username already registered!' })
              } else {
                new Sample({ email, username, password: md5(password) }).save(function (error, user) {
                  if (error) res.send({ code: 1, msg: 'Server disconnected' })
                  const data = { email, username, _id: email._id }
                  res.cookie('emailid', email._id, { maxAge: 1000 * 60 * 60 * 24 })
                  res.send({ code: 0, data })
                })
              }
            })
          };
        });
      } else {
        res.send({ code: 1, msg: 'password too simple!' })
      }
    } else {
      res.send({ code: 1, msg: 'email error!' })
    }
  });

  app.post("/signin", async function (req, res) {
    const { email, password } = req.body;
    Sample.findOne({ email, password: md5(password) }, filter, function (err, data) {
      if (data) {
        const token = jwt.sign({
          isAuth: true,
          isadmin: data.isadmin,
          username: data.username,
          id: String(data._id)
        },
          process.env.JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        res.send({
          code: 0,
          data: userDataFromDocument(data),
          token: token
        })
      } else {
        res.send({ code: 1, msg: "Invalid email or password" });
      }
    })
  });

  app.post("/addorder", async function (req, res) {
    const { timemillis, totalprice, products } = req.body;
    // todo: validate products
    if (req.user) {
      Sample.findById(req.user.id, function (err, user) {
        if (err) {
          res.send({ code: 1, msg: "Invalid ID" });
        } else {
          const nextid = user.nextid;
          const newOrder = {
            orderid: nextid,
            timemillis: timemillis,
            totalprice: totalprice,
            products: products
          }
          Sample.updateOne({ _id: user._id }, { nextid: nextid + 1, $push: { orders: newOrder } }, function (err, data) {
            if (data.nModified === 1) {
              res.send({ code: 0, data: { orderid: nextid } });
            } else {
              res.send({ code: 1, msg: "Could not submit order" });
            }
          });
        }
      });
    } else {
      res.send({ code: 1, msg: "Invalid login" });
    }
  });

  app.get("/orders", async function (req, res) {
    if (req.user) {
      Sample.findById(req.user.id, function (err, user) {
        if (err) {
          res.send({ code: 1, msg: "Invalid ID" });
        } else {
          res.send({ code: 0, data: user.orders });
        }
      });
    } else {
      res.send({ code: 1, msg: "Invalid login" });
    }
  });

  app.post("/updateprofile", async function (req, res) {
    const { profile } = req.body;
    // todo: validate profile
    if (req.user) {
      Sample.findById(req.user.id, function (err, user) {
        if (err) {
          res.send({ code: 1, msg: "Invalid ID" });
        } else {
          Sample.updateOne({ _id: user._id }, { profile: profile }, function (err, data) {
            if (data.nModified === 1) {
              res.send({ code: 0, data: profile });
            } else {
              res.send({ code: 1, msg: "Could not update password" });
            }
          });
        }
      });
    } else {
      res.send({ code: 1, msg: "Invalid login" });
    }
  });

  app.post('/user/settings', async function (req,res){
    const {oldPassword, newPassword} =req.body;
    if(req.user){
      Sample.findById(req.user.id, function (err, user){
        if(err){
          res.send({code:1, msg: 'Invalid ID'});
        }else{
          Sample.findOne({_id:user._id, password: md5(oldPassword)}, filter, function (err, data){
              if (data) {
                    Sample.updateOne({ _id: user._id }, {password: md5(newPassword)}, function (err,data){
                      if (data.nModified === 1) {
                        res.send({ code: 0, msg: 'Update Success' });
                      } else {
                        res.send({ code: 1, msg: "Could not update password" });
                      }
                    });
              }else{
                res.send({ code: 1, msg: "Invalid password" });
              }
            })
        }
      })
    }
  });

  app.post('/user/favorites', async function (req,res){
    const {product, isFavorite} =req.body;
    if(req.user){
      Sample.findById(req.user.id, function (err, user){
        if(err){
          res.send({code:1, msg: 'Invalid ID'});
        }else{
          Sample.findOne({_id:user._id}, filter, function (err, data){
              if (data) {
                if (isFavorite) {
                  Sample.updateOne({ _id: user._id }, { $addToSet: { favorites: product } }, function (err, data) {
                    if (data.nModified === 1) {
                      res.send({ code: 0, data: { product: product, isFavorite: isFavorite } });
                    } else {
                      res.send({ code: 1, msg: "Could not add favorite" });
                    }
                  });
                } else {
                  Sample.updateOne({ _id: user._id }, { $pull: { favorites: product } }, function (err, data) {
                    if (data.nModified === 1) {
                      res.send({ code: 0, data: { product: product, isFavorite: isFavorite } });
                    } else {
                      res.send({ code: 1, msg: "Could not remove favorite" });
                    }
                  });
                }
              }else{
                res.send({ code: 1, msg: "Invalid password" });
              }
            })
        }
      })
    }
  });




  app.get('/profile', (req, res) => {
    if (req.user) {
      Sample.findById(req.user.id, function (err, user) {
        if (err) {
          res.send({ code: 1, msg: "Invalid ID" });
        } else {
          res.send({
            code: 0,
            data: {
              username: user.username,
              email: user.email,
              profile: user.profile,
              isadmin: user.isadmin
            }
          });
        }
      });
    } else {
      res.send({ code: 1, msg: "Invalid login" });
    }
  })

  app.post('/user/member', async function (req,res) {
    const password =req.body.password
    if(req.user){
      Sample.findById(req.user.id, function (err, user){
        if(err){
          res.send({code:1, msg: 'Invalid ID'});
        }else{
          Sample.findOne({_id:user._id, password: md5(password)}, filter, function (err, data){
            if(data){
              Sample.updateOne({ _id: user._id }, { isadmin: true }, function (err, data) {
                if (data.nModified === 1) {
                  res.send({ code: 0, msg: 'Get Membership Success', isadmin: true , _id: user._id});
                } else {
                  res.send({ code: 1, msg: "You are already Membership", isadmin: user.isadmin,  _id: user._id });
                }
            })
          }else {
              res.send({code:1, msg: 'Invalid ID'});
            }
          })
        }
      })
    }
  });

  app.get('/userdata', (req, res) => {
    if (req.user) {
      Sample.findById(req.user.id, function (err, user) {
        if (err) {
          res.send({ code: 1, msg: "Invalid ID" });
        } else {
          res.send({
            code: 0,
            data: userDataFromDocument(user)
          });
        }
      });
    } else {
      res.send({ code: 1, msg: "Invalid login" });
    }
  })

  app.get('/order-history', (req, res) => {
    if (req.user) {
      Sample.findById(req.user.id, function (err, user) {
        if (err) {
          res.send({ code: 1, msg: "Invalid ID" });
        } else {
          res.send({
            code: 0,
            data: {
              username: user.username,
              email: user.email,
              order: user.order
            }
          });
        }
      });
    } else {
      res.send({ code: 1, msg: "Invalid login" });
    }
  })


  app.get('/', (req, res) => {

    Sample.find(function (err, samples) {
      if (err)
        res.send(err);
      res.status(201);
      res.json(samples);
    });
  });




}
