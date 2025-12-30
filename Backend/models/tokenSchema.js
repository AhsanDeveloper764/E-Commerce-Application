const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
    token:{type:String,required:true},
    userId:{type:mongoose.SchemaTypes.ObjectId, ref:"User"}
},
    {timestamps:true}
)

const RefreshTokenModel = mongoose.model("Refreshtoken",tokenSchema,"token")
module.exports = RefreshTokenModel;