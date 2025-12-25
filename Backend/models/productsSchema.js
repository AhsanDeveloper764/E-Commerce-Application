const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({    
    productname:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    color:{type:String,required:true},
    quantity:{type:Number,required:true},
    image:{type:String,required:true},
},
    {timestamps:true}
)

const product = mongoose.model("product",productSchema,"Product")
module.exports=product;