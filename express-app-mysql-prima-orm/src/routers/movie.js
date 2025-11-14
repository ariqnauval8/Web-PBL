const express = require('express')
const { validationBodyMovies } = require('../middleware/validation')
const { createMovie, getMovies, getMovieByID, updateMovie, deleteMovie } = require('../controllers/movieController')
const movieRouter = express.Router()

// create
movieRouter.post("/movie", validationBodyMovies, createMovie)

// read
movieRouter.get("/movie", getMovies)
movieRouter.get("/movie/:id", getMovieByID)

// update
movieRouter.put('/movie/:id', validationBodyMovies, updateMovie)

// delete
movieRouter.delete('/movie/:id', deleteMovie)


module.exports = movieRouter