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
                const itemIndex = cart.items.findIndex((item)=>{
                    item.productId.toString() === productId 
                })
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
    },
    async getMyCart(req,resp,next){
        try{
            const cartDetail = await cartSchema.findOne({userId:req.user._id})
            .populate("items.productId")
            resp.status(201).json({
                success:true,
                message:"Getting Cart By ID",
                response:cartDetail
            })       
        }catch(error){
            return next(error)
        }
    },  
    async removeItem(req,resp,next){
        const getId = Joi.object({
            productId:Joi.string().regex(mongodbIdPattern).required()
        })
        const {error} = getId.validate(req.params)
        if(error){
            return next(error)
        }
        const {productId} = req.body
        try {
            const cartItem = await cartSchema.findById({userId:req.user._id})
            if(!cartItem){
                return resp.status(404).json({message:"Product Not Found"})
            }
            cartItem.items = cartItem.items.filter((item)=>{
                item.productId.toString() !== productId
            })
            await cartItem.save()
            resp.status(200).json({
                success: true,
                message: "Item removed",
                response: cart
            });
        } catch (error) {
            return next(error)
        }
    },
    async clearItem(req,resp,next){
        try {
            const cart = await cartSchema.findById({userId:req.user._id})
            if(!cart){
                resp.status(404).json({message:"Product Not Found"})
            }
            cart.items = []
            await cart.save()
            resp.status(200).json({
                success: true,
                message: "Cart cleared",
                response: cart
            });
        }catch(error){
            return next(error)
        }
    },
    async increase(req,resp,next){
    },
    async decrease(req,resp,next){
    }
}
module.exports = cartController

// Populate ki simple definition:
// populate() ObjectId ko poore object me convert kar deta hai
// ab agar populate nhi krtay tw so sirf product kee id or jo qunatity hogeee wo return 
// krdege but agar populate kreigay tw product kee details bhee sath mai ahagee
// populate ko use krnay say D ki jagah poora Product aa gaya

// | MongoDB    | SQL            |
//  ---------- | -------------- 
// | populate() | JOIN           |
// | ObjectId   | Foreign Key    |
// | ref        | Table relation |