const Joi = require("joi");
const fs = require("fs");
const productSchema = require("../models/productsSchema");
const cloudinary = require("cloudinary")
const productDto = require("../DataObject/productDto") 

const productController = {
    async createProduct(req,resp,next){
        // validate req body 
        const validateSchema = Joi.object({
            productname:Joi.string().required(),
            price:Joi.number().required(),
            discount:Joi.number().required(),
            color:Joi.string().required(),
            quantity:Joi.number.required(),
            image:Joi.string().required(),
        })
        const {error} = validateSchema.validate(req.body);
        if(error){
            return next(error)
        }
        const {productname,price,discount,color,quantity,image} = req.body;
        let response;
        try {
            response = await cloudinary.uploader.upload(image); 
        } catch (error) {
            return next(error)
        }
        let product;
        try {
            product = new productSchema({
                productname,
                price,
                discount,
                color,
                quantity,
                imagePath:response.url
            })
            await product.save()
        } catch (error) {
            return next(error)
        }
        const Prodto = new productDto(product)
        return resp.status(201).json({
                product:Prodto,
                message:"Your Product has been Submitted Sucessfully"
        })
    },
    async getProduct(req,resp,next){

    },
    async GetById(req,resp,next){

    },
    async updateProduct(req,resp,next){

    },
    async deleteProduct(req,resp,next){

    }
}
module.exports = productController