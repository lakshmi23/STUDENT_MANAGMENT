const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    usn:{
        type:String,
        required:true,
        unique:true
    },
    CIE1:Number,
    
    CIE2:Number,
    
    CIE3:Number

})

const Userdb = mongoose.model('marks' ,schema );
module.exports= Userdb;