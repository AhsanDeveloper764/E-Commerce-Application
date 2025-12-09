const express = require("express");
const routes = express.Router();
const UserController = require("../controller/userController");

routes.post("/signUp",UserController.register)
routes.post("/login",UserController.login)
routes.post("/forgetPassword",UserController.forgetPassword)

module.exports = routes