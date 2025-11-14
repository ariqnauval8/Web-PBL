const express = require('express')
const { validationBodyMovies } = require('../middleware/validation')
const { createMovie, readMovie, updateMovie, deleteMovie, readMoviebyId } = require('../controllers/movieController')
const mainRouter = express.Router()

mainRouter.post("/movies", validationBodyMovies ,createMovie)
mainRouter.get("/movies", readMovie)
mainRouter.get("/movies/:id", readMoviebyId)
mainRouter.put("/movies/:id", validationBodyMovies, updateMovie)
mainRouter.delete("/movies/:id", deleteMovie)


module.exports = mainRouter
