const { prisma } = require("../config/utils")

const createMovie = async (req, res)=>{
  let {title, year, categoryId} = req.body

    try{
    let movie = await prisma.movie.create({
      data:{
        title, year, categoryId
      }
    })
    res.json({data: movie, message: "movie was successfully created", status: "success"})
    return
  }catch(err){
    res.json({
      data: null,
      message: err,
      status: "error"
    })
  }

}

const getMovies = async (req, res)=>{

  try{
    let movies = await prisma.movie.findMany()
    res.json({data: movies, message: "movies was successfully get", status: "success"})
    return
  }catch(err){
    res.status(404).json({
      data: null,
      message: err,
      status: "error"
    })
  }
}

const getMovieByID = async (req, res)=>{
  let {id} = req.params

  try{
    let movie = await prisma.movie.findFirst({
      where: {
        id: Number(id)
      }
    })
    let message = movie ? "movie was successfully get" : "movie not found"
    let status = movie ? 200 : 404
    
    res.status(status).json({data: movie, message, status: "success"})
    return
  }catch(err){
    res.status(404).json({
      data: null,
      message: err,
      status: "error"
    })
  }
}

const updateMovie = async (req, res)=>{
  let {title, year, categoryId} = req.body
  let {id} = req.params

  try{
    let movie = await prisma.movie.update({
      data:{
        title, year, categoryId
      },
      where: {
        id: Number(id)
      }
    })
    res.json({data: movie, message: "movie was successfully updated", status: "success"})
    return
  }catch(err){
    res.json({
      data: null,
      message: err,
      status: "error"
    })
  }
}


const deleteMovie = async (req, res)=>{
  let {id} = req.params

try{
    await prisma.movie.deleteMany({
      where: {
        id: Number(id)
      }
    })
    res.json({data: null, message: "movie was successfully deleted", status: "success" })
    return
  }catch(err){
    res.status(400).json({
      data: null,
      message: err,
      status: "error"
    })
  }

}

module.exports = {
  createMovie,
  getMovies,
  getMovieByID,
  updateMovie,
  deleteMovie
}