const express = require('express')
const router = express.Router()

const { authentication } = require("../middlewares/authentication")
const { authorization } = require('../middlewares/authorization')

const userController = require("../controllers/userController")
const productController = require('../controllers/productController')
const categoryController = require('../controllers/categoryController')


//defaults router /admin
router.post("/login", userController.adminlogin)
router.use(authentication)
router.use(authorization)
router.post("/register", userController.adminRegister)

//ini harus ada authorization

//router get read product, post add product, put edit product, delete product
router.get("/products", productController.readAllProduct)
router.get("/products/:id", productController.readDetailProduct)
router.post("/products", productController.addProduct)
router.put("/products/:id", productController.editProduct)
router.delete("/products/:id", productController.deleteProduct)


//router get read category, post add category, put edit category, delete category
router.get("/categories", categoryController.readAllCategory)
router.get("/categories/:id", categoryController.readDetailCategory)
router.post("/categories", categoryController.addCategory)
router.put("/categories/:id", categoryController.editCategory)
router.delete("/categories/:id", categoryController.deleteCategory)


module.exports = router

