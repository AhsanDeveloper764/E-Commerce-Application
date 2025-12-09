const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    companyName:{type:String,required:true},
    addressLine1:{type:String,required:true},
    addressLine2:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true},
    code:{type:Number,required:true},
    phoneNumber:{type:Number,required:true},
},{timestamps:true})

const UserModel = mongoose.model("userData",UserSchema)
module.exports = UserModel;