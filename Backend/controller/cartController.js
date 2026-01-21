const Joi = require("joi");
const fs = require("fs");
const cartSchema = require("../models/cartSchema");
const productSchema = require("../models/productsSchema");
const mongodbIdPattern = /^[a-fA-F0-9]{24}$/;

const cartController = {
    async addCart(req,resp,next){
        const Cartvalidation = Joi.object({
            productId:Joi.string().regex(mongodbIdPattern).required(),
            quantity:Joi.number().min(1).required()
        })
        const {error} = Cartvalidation.validate(req.body);
        if(error){
            return next(error)
        }
        const {productId,quantity} = req.body;
        const userId = req.user._id
        try {
            const product = await productSchema.findOne(productId)
            if(!product){
                return resp.status(404).json({
                    success:false,
                    message:"Product Not Found"
                })
            }
            let cart = await cartSchema.findOne({userId})
            if(!cart){
                cart = new cartSchema({
                    userId,
                    items:[{productId,quantity}]
                }); 
            } else {
                const itemIndex = cart.items.findIndex((item)=>{
                   return item.productId.toString() === productId 
                })
                if(itemIndex > -1){
                    cart.items[itemIndex].quantity += quantity
                }else{
                    cart.items.push({productId,quantity})
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
            const cartDetail = await cartSchema.findOne({userId:req.user._id}).populate("items.productId")
            resp.status(200).json({
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
            const cartItem = await cartSchema.findOne({userId:req.user._id})
            if(!cartItem){
                return resp.status(404).json({message:"Product Not Found"})
            }
            cartItem.items = cartItem.items.filter((item)=>{
                return item.productId.toString() !== productId
            })
            await cartItem.save()
            resp.status(200).json({
                success: true,
                message: "Item Removed",
                response: cart
            });
        } catch (error) {
            return next(error)
        }
    },
    async clearItem(req,resp,next){
        try {
            const cart = await cartSchema.findOne({userId:req.user._id})
            if(!cart){
                resp.status(404).json({message:"Cart Not Found"})
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
      const {productId} = req.body
      const user = req.user._id
      try {
        const cart = await cartSchema.findOne({userId:user})
        console.log("IncreaeCartID",cart);
        const item = cart.items.find((item)=>{
            return item.productId.toString() === productId
        })
        console.log("Product Fonnd for Increase Counter",item);
        if(item){
            item.quantity += quantity
        }
        await cart.save()  
        res.json({ message: "Quantity Increased" });  
      } catch (error) {
        return next(error)
      }
    },
    async decrease(req,resp,next){
        const {productId} = req.body
        const user = req.user._id
        try {
            const cart = await cartSchema.findOne({userId:user})
            console.log("IncreaeCartID",cart);
            const item = cart.items.find((item)=>{
                return item.productId.toString() === productId
            })
            console.log("Product Fonnd for Increase Counter",item);
            if(item && item.quantity > 1){
                item.quantity -= 1
            }
            await cart.save()  
            res.json({ message: "Quantity decreased" });           
        } catch (error) {
            return next(error)
        }
    }
}
module.exports = cartController

// Populate ki simple definition:
// populate() ObjectId ko poore object me convert kar deta hai
// ab agar populate nhi krtay tw so sirf product kee id or jo quantity hogeee wo return 
// krdege but agar populate kreigay tw product kee details bhee sath mai ahagee
// populate ko use krnay say ID ki jagah poora Product aa gaya

// | MongoDB    | SQL            |
//  ---------- | -------------- 
// | populate() | JOIN           |
// | ObjectId   | Foreign Key    |
// | ref        | Table relation |

// Aggregation hamesha us controller me hoti hai jiska data process ho raha ho