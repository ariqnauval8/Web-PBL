const express = require('express')
const {validationBodyCategories } = require('../middleware/validation')
const { createCategory, updateCategory, deleteCategory, getCategorybyId, getCategory } = require('../controllers/categoryController')
const categoryRouter = express.Router()

// create
categoryRouter.post("/category", validationBodyCategories, createCategory)

// read
categoryRouter.get("/category", getCategory)
categoryRouter.get("/category/:id", getCategorybyId)

// update
categoryRouter.put('/category/:id', validationBodyCategories, updateCategory)

// delete
categoryRouter.delete('/category/:id', deleteCategory)


module.exports = categoryRouter