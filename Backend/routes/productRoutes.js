const express = require("express")
const routes = express.Router();
const productController = require("../controller/productController")

routes.post("/createProduct",productController.createProduct); 
routes.get("/getProduct",productController.getProduct); 
routes.get("/getById/:id",productController.GetById);
routes.put("/update",productController.updateProduct);
routes.delete("/delete/:id",productController.deleteProduct)

module.exports = routes;