const express = require("express");
const routes = express.Router();
const UserController = require("../controller/userController");

routes.post("/signUp",UserController.register)
routes.get("/login",UserController.login)
routes.get("/logout",UserController.logOut)
routes.post("/forgetPassword",UserController.forgetPassword)

module.exports = routes