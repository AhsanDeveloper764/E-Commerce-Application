const  mongoose  = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserRef",required:true},
    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId,ref:"ProductRef",required:true},
            quantity:{type:Number,required:true}
        }
    ],
    totalAmount:{type:Number,required:true},
    status:{
        type:String,
        enum:["pending", "paid", "shipped", "delivered", "cancelled"],
        default:"pending"
    }
},
    {timestamps:true}
)

const OrderModel = mongoose.model("OrderRef",orderSchema,OrderData)
module.exports = OrderModel