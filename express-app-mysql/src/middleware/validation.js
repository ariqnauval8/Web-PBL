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

module.exports = {validationBodyMovies}