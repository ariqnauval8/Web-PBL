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

const validationBodyCategories = (req, res, next)=>{
  let {name} = req.body

  if (name === undefined){
    res.status(400).json({message: "name is required"})
  }else{
    next()
  }
}

module.exports = {validationBodyMovies, validationBodyCategories}