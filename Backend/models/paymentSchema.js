const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserRef",required:true},
    orderId:{type:mongoose.Schema.Types.ObjectId,ref:"OrderRef",required:true},
    amount:{type:Number,required:true},
    paymentMethod:{
        type:String,
        enum:["Card","Paypap","cod","wallet"],
        required:true,
    },
    status:{
        type:String,
        enum:["pending","paid","failes","refund"],
        default:"pending",
    },
    transactionId:{
        type:String
    }
},
    {timestamps:true}
)

const  paymentModel = mongoose.model("PaymentRef",paymentSchema,"Payment")
module.exports = paymentModel 