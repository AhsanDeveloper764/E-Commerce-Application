const Joi = require("joi")
const mongodbIdPattern = /^[a-fA-F0-9]{24}$/;
const productSchema = require("../models/productsSchema");
const cartSchema = require("../models/cartSchema");
const orderSchema = require("../models/orderSchema");
const paymentSchema = require("../models/paymentSchema");

const CheckoutController = {
    async checkoutCart(req,resp,next) {

    },
    async ValidateCart(req,resp,next){

    },
    async calculateTotal(req,resp,next){

    },
    async createOrder(req,resp,next){

    },
    async initialPayment(req,resp,next){

    },
    async clearCart(req,resp,next){

    },
    async priceSummary(req,resp,next){

    },
    async applyCoupon(req,resp,next){

    },
    async confirmCheckout(req,resp,next){

    }
}

module.exports = CheckoutController;
// CheckoutController ek bridge hai
// jo Cart ko Order aur Payment se jorta hai.