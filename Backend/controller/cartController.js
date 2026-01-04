const Joi = require("joi");
const fs = require("fs");
const cartSchema = require("../models/cartSchema");
const productSchema = require("../models/productsSchema");
const mongodbIdPattern = /^[a-fA-F0-9]{24}$/;

const cartController = {
    async addCart(req,resp,next){
        const Cartvalidation = Joi.object({
            productId:Joi.string().regex(mongodbIdPattern).required(),
            qunatity:Joi.number().min(1).required()
        })
        const {error} = Cartvalidation.validate(req.body);
        if(error){
            return next(error)
        }

        const userId = req.user._id
        const {productId,qunatity} = req.body;
        try {
            const product = await productSchema.findById(productId)
            if(!product){
                return resp.status(404).json({
                    success:false,
                    message:"Product Not Found"
                })
            }
            let cart = await cartSchema.findById({userId})
            if(!cart){
                cart = new cartSchema({
                    userId,
                    items:[{productId,qunatity}]
                }) 
            }else{
                const itemIndex = cartSchema.items.findIndex((item)=>{
                item.productId.toString() === productId })
                if(itemIndex > -1){
                    cart.items[itemIndex].quantity += qunatity
                }else{
                    cart.items.push({productId,qunatity})
                }
            }
            await cart.save()
            resp.status(201).json({
                success:true,
                message:"Added to Cart",
                response:cart
            })
        }catch(error){
            return next(error)
        }
    }
}
module.exports = cartController