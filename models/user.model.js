const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    user_name : {
        type : String,
        required : [true , "user name is required"],
    },
    email : {
        type : String,
        required : [true , "email is required"],
        unique : [true , "email is unique"],
    },
    password : {
        type : String,
        required : [true , "password is required"]
    },
},
{
timestamps: true, 
});

module.exports = new mongoose.model('user',userSchema)