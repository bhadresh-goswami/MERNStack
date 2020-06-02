const mongoose = require('mongoose');
//create schema object
let Schema = mongoose.Schema;
//create defination
let userSchema = new Schema({
    userName:String,
    userEmailId:String,
    userPassword:String,
    createdDate:Date,
    location:String
});
//create model
let userModel = mongoose.model('users',userSchema);

module.exports = userModel;