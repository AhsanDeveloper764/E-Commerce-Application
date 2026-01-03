const Joi = require("joi");
const fs = require("fs");
const cartSchema = require("../models/cartSchema");
const userSchema = require("../models/userSchema");
const productSchema = require("../models/productsSchema");
const mongodbIdPattern = /^[a-fA-F0-9]{24}$/;

const cartController = {
    async addCart(req,resp,next){
        const Cartvalidation = Joi.object({
            id:Joi.string().regex(mongodbIdPattern).required()
        })
        const {error} = Cartvalidation.validate(req.body);
        if(error){
            return next(error)
        }
        let cartDetail;
        try {
            const {id} = req.params
            cartDetail = await userSchema.find({_id:id})
        } catch (error) {
            return next(error)
        }
        let productId;
        try {
            const {id} = req.params
            productId = await productSchema.find({_id:id})
            if(productId){
                const cart = cartSchema({
                    quantity,
                })
                await cart.save()
            }   
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = cartController