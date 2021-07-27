const mongoose = require('mongoose');


module.exports =mongoose.model('project-register', {
    email: { type: String, unique:true, default:'', required:true },
    password: { type:String, default:'', required:true },
    username:{type:String, unique: true,default:'', required:true },
    isadmin:{type:Boolean,default: false, required:true }
});