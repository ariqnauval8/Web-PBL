const { request, response } = require("express");

const validationBodyMovies = (request, response, next) => {
    let {title, year} = request.body

    if (title === undefined || year === undefined){
        response.json({
            message: "title and year is required"
        })
    }else{
        next()        
    }
}

const validationBodyCategories = (request, response, next) => {
    let {title} = request.body

    if (title === undefined ){
        response.json({
            message: "title/name is required"
        })
    }else{
        next()        
    }
}


const registerValidation = (request, response, next) => {
    let {email, name, password} = request.body

    if(email === undefined || name === undefined || password === undefined){
        response.json({
            message: "name, email and password is required"
        })
    }else{
        next()
    }
}

const loginValidation = (request, response, next) => {
    let {email, password} = request.body

    if(email === undefined || password === undefined){
        response.json({
            message: "email and password is required"
        })
    }else{
        next()
    }
}


module.exports = {validationBodyMovies, validationBodyCategories, registerValidation, loginValidation}