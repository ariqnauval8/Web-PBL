const { request, response } = require("express");
const jwt = require("jsonwebtoken")

const authenticateJWT = (request, response, next) => {
    const authHeader = request.header('Authorization')
    if(!authHeader){
        response.json({
            message: "unauthorized"
        })
        return
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            response.json({
                message: "Unauthorized"
            })
            return
        }else{
            request.user = user
            next()
        }
    })
}

module.exports = {authenticateJWT}