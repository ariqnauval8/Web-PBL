const express = require('express')
const { validationBodyMovies } = require('../middleware/validation')
const { createMovie, deleteMovie, getMovie, getMoviebyId, updateMovie } = require('../controllers/movieController')
const { authenticateJWT } = require('../middleware/auth')
const movieRouter = express.Router()

movieRouter.post('/movies', authenticateJWT, validationBodyMovies, createMovie)
movieRouter.get('/movies', getMovie)
movieRouter.get('/movies/:id', getMoviebyId),
movieRouter.put('/movies', authenticateJWT, validationBodyMovies, updateMovie)
movieRouter.delete('/movies',  authenticateJWT, deleteMovie)


module.exports = movieRouter
