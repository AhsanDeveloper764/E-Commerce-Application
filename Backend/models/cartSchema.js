const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserRef",required:true,unique:true},
    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId,ref:"ProductRef",required:true},
            quantity:{type:Number,required:true,min:1}
        }
    ],
},
    {timestamps:true}
)
const cartModel = mongoose.model("CartRef",cartSchema,"Cart")
module.exports = cartModel;