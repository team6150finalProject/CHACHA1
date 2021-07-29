const Sample =require('./userModels');
const filter = {password:0 }
const jwt = require('jsonwebtoken');

const auth = async(req,res) =>{
    const raw = String(req.headers.authorization).split(' ').pop();
    const {id} = jwt.verify(raw,process.env.JWT_KEY)
    req.user = await Sample.findById(id)
}

function checkFormat(data,type){
    var regPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,12}$/;
    var regExEmail=/([\w\.]+)@([\w\.]+)\.(\w+)/;
    if(type==0){
        if(!String(data).match(regPassword)){
            return false;
        }else {
            return true;
        }
    }else{
        if(!String(data).match(regExEmail)){
            return false;
        }else {
            return true;
        }
    }
}

module.exports =(app) =>{
    app.post('/signup', function (req,res){
        const {email,username,password}=req.body;
        if(checkFormat(req.body.email,1) ) {
            if (checkFormat(req.body.password,0)) {
                Sample.findOne({email}, function (err, data) {
                    if (data) {
                        res.send({code:1, msg: 'Email already registered!'})
                    } else {
                        Sample.findOne({username}, function (err, data) {
                            if(data){
                                res.send({code:1, msg: 'username already registered!'})
                            }else {
                                new Sample({email, username, password}).save(function (error, user) {
                                    if (error) res.send({code: 1, msg: 'Server disconnected'})
                                    const data = {email, username, _id: email._id}
                                    res.cookie('emailid', email._id, {maxAge: 1000 * 60 * 60 * 24})
                                    res.send({code: 0, data})
                                })
                            }
                        })
                    };
                });
            } else {
                //res.end( JSON.stringify({error:"password too simple"}));
                res.send({code:1, msg: 'password too simple!'})
            }
        }else{
            //res.end(JSON.stringify({error: "email error"}));
            res.send({code:1, msg: 'email error!'})
        }
    });

   app.post("/signin",async function (req,res){
        const {email,password }=req.body;
        const user = await Sample.findOne({
            email: req.body.email
        })
        if(!user){
            return res.status(422).send({
                message:"this email doesn't exist"
            })
        }

        Sample.findOne({email, password:password},filter,function (err,data){
            if(data){
                const token = jwt.sign({
                    id:String(user._id)
                },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );

                console.log(user)
                console.log(token)
                res.send({
                    code:0,
                    user,
                    token
                })
            }else{
                return res.status(422).send({code:1 , msg: "Wrong Password"});
            }
        })
    })
   /* app.post("/signin",function (req,res){
        const {email,password }=req.body;
        Sample.findOne({email, password:password},filter,function (err,data){
            if(data){
                res.send({code: 0, data: email});
            }else{
                 res.send({code:1 , msg: "Invalid Email or Password"});
            }
        })
    })*/


    app.get('/',(req,res) =>{

        Sample.find(function (err,samples){
            if(err)
                res.send(err);
            console.log('samples',samples);
            res.status(201);
            res.json(samples);
        });
    });


}
