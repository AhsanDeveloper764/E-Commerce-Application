const Joi = require("joi");
const fs = require("fs");
const productSchema = require("../models/productsSchema");
const cloudinary = require("cloudinary")
const productDto = require("../DataObject/productDto") 
const {CloudName,apikey,apiSecret} = require("../config/index");
const productDetails = require("../DataObject/productDetail");
const mongodbIdPattern = /^[a-fA-F0-9]{24}$/

const Cloudinary = async () =>  {
    // Configuration
    await cloudinary.config({ 
        cloud_name:CloudName, 
        api_key:apikey, 
        api_secret:apiSecret 
    });
};
Cloudinary()

const productController = {
    async createProduct(req,resp,next){
        // validate req body 
        const validateSchema = Joi.object({
            productname:Joi.string().required(),
            price:Joi.number().required(),
            discount:Joi.number().required(),
            color:Joi.string().required(),
            quantity:Joi.number().required(),
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
                image:response.url
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
        try {
            const Product = await productSchema.find({})
            const proArray = []
            for(let i=0; i<Product.length; i++){
                const product = new productDto(Product[i])
                proArray.push(product) 
            }
            return resp.status(201).json({
            product:proArray,
            message:"Get Products!",
        })
        } catch (error) {
            return next(error)
        }
    },
    async GetById(req,resp,next){
        const getIdSchema = Joi.object({
            id:Joi.string().regex(mongodbIdPattern).required()
        })
        const {error} = getIdSchema.validate(req.params)
        if(error){
            return next(error)
        }
        let productDetail;
        const {id} = req.params
        try {
            productDetail = await productSchema.find({_id:id})
        } catch (error) {
            return next(error)
        }
        // const getProductById = new productDetails(productDetail)
        return resp.status(201).json({product:productDetail})   
    },
    async updateProduct(req,resp,next){
        const updateProductSchema = Joi.object({
            productId:Joi.string().regex(mongodbIdPattern).required(),
            productname:Joi.string(),
            price:Joi.number(),
            discount:Joi.number(),
            color:Joi.string(),
            quantity:Joi.number(),
            image:Joi.string(),
        })
        const {error} = updateProductSchema.validate(req.body);
        if(error){
            return next(error)
        }
        const {productname,price,discount,color,quantity,image,productId} = req.body;

        let product;
        try {
            product = await productSchema.findByIdAndUpdate({_id:productId});
        } catch (error) {
            return next(error)
        }
        if(!product){
            return resp.status(404).json({message:"Product ID Not Found"})
        }
        if(image){
            let response;
            try {
                response = await cloudinary.uploader.upload(image);
            } catch (error) {
                return next(error)
            }
            await productSchema.updateOne({_id:productId},
            {productname,price,discount,color,quantity,image:response.url})
        }else{
            await productSchema.updateOne({_id:productId},
            {productname,price,discount,color,quantity})
        }
        return resp.status(201).json({
            message:"product has been updated!",
            update:product
        })
    },
    async deleteProduct(req,resp,next){
        const deleteBlogSchema = Joi.object({
            id:Joi.string().regex(mongodbIdPattern).required()
        })
        const {error} = deleteBlogSchema.validate(req.params);
        if(error){
            return next(error)
        }
        let deleteProduct;
        const {id} = req.params
        try {
            deleteProduct = await productSchema.deleteOne({_id:id})
        } catch (error) {
            return next(error)            
        }
        return resp.status(201).json({
            message:"Product has been deleted",
            delete:deleteProduct
        })
    }
}
module.exports = productController