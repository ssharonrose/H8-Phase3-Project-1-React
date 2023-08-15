const express = require('express')
const productController = require('../controllers/productController')
const router = express.Router()


const userController = require("../controllers/userController")
//const controller product
//const controller category
//const controller images

//defaults router /user
router.post("/register", userController.userRegister)
router.post("/login", userController.userlogin)

//router get read product, read detail product
router.get("/products", productController.readAllProduct)
router.get("/products/:id", productController.readDetailProduct)



module.exports = router

