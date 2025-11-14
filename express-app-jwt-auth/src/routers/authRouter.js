const express = require('express')
const { register, login } = require('../controllers/authController')
const { registerValidation, loginValidation } = require('../middleware/validation')
const authRouter = express.Router()

authRouter.post('/register', registerValidation, register)
authRouter.post('/login', loginValidation, login)



module.exports = authRouter
