const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact_number : {
        type : String,
        required : true
    },
});

module.exports = new mongoose.model('contact',contactSchema)