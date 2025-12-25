const express = require("express")
const routes = express.Router();
const productController = require("../controller/productController")

routes.post("/createProduct",productController.createProduct); 
routes.get("/getProduct",productController.getProduct); 

module.exports = routes