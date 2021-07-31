const Sample =require('./userModels');
const filter = {password:0, __v:0 }
const jwt = require('jsonwebtoken');
const md5= require('blueimp-md5')

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
        let {email,username,password}=req.body;
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
                                new Sample({email, username, password: md5(password)}).save(function (error, user) {
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
                res.send({code:1, msg: 'password too simple!'})
            }
        }else{
            res.send({code:1, msg: 'email error!'})
        }
    });

   app.post("/signin", async function (req,res){
        const {email,password }=req.body;
        Sample.findOne({email, password:md5(password)},filter,function (err,data){
            if(data){
                const token = jwt.sign({
                    isAuth: true,
                    username: data.username,
                    id:String(data._id)
                },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                const alldata ={_id:data._id,email: data.email,isadmin: data.isadmin, token}
                res.send({
                    code:0,
                    data:alldata,
                })
            }else{
                res.send({code:1 , msg: "Invalid email or password"});
            }
        })
    })

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
