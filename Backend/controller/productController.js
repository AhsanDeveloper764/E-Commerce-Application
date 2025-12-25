const Joi = require("joi");
const fs = require("fs");
const productSchema = require("../models/productsSchema");
const {BACKEND_SERVER_PATH} = require("../config/index");

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