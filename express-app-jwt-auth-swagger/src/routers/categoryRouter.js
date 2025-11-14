const express = require('express')
const { validationBodyCategories } = require('../middleware/validation')
const { createCategory, getCategory, getCategorybyId, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { authenticateJWT } = require('../middleware/auth')
const categoryRouter = express.Router()

categoryRouter.post('/categories', authenticateJWT, validationBodyCategories, createCategory)
categoryRouter.get('/categories', getCategory)
categoryRouter.get('/categories/:id', getCategorybyId),
categoryRouter.put('/categories', authenticateJWT, validationBodyCategories, updateCategory)
categoryRouter.delete('/categories', authenticateJWT, deleteCategory)


module.exports = categoryRouter
