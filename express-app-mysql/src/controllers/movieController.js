const { request, response } = require("express");
const { connectionPool } = require("../config/database");

const createMovie  = (request, response) => {
    let {title, year} = request.body
    let queryText = `INSERT INTO movies (title, year,created_at,updated_at) VALUES ('${title}', ${year},now(),now())`

    connectionPool.query(queryText, (err, data)=>{
            if(err){
                console.log(err)
                return
            }
        })
        response.json("movie was succefully created")
}


const readMovie = (request, response) => {
    let queryText = `SELECT * FROM movies`

    connectionPool.query(queryText, (err, data)=>{
        if(err){
            console.log(err)
            return
        }

        let movies = data.map(element => {
        let {id, title, year, created_at, updated_at} = element
        let movie = {id, title, year, created_at, updated_at}
        return movie
        })
        response.json(movies)
    })
}

const readMoviebyId = (request, response) => {
    let {id} = request.params
    let queryText = `SELECT * FROM movies WHERE id=${id}`

    connectionPool.query(queryText, (err, data)=>{
        if(err){
            console.log(err)
            return
        }

        let movies = data.map(element => {
        let {id, title, year, created_at, updated_at} = element
        let movie = {id, title, year, created_at, updated_at}
        return movie
        })
        response.json(movies)
    })
}

const updateMovie = (request, response) => {
    let {title, year} = request.body
    let {id} = request.params

    let queryText = `UPDATE movies SET title='${title}', year=${year}, updated_at=now() WHERE id=${id}`
    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.log(err)
            return
        }
        response.json("movie was succesfully updated")
    })
}

const deleteMovie = (request, response) => {
    let {id} = request.params
    let queryText = `DELETE FROM movies WHERE id=${id}`

    connectionPool.query(queryText,(err, data) => {
        if(err){
            console.log(err)
            return
        }
        response.json("movie was successfully deleted")
    })
}

module.exports = {createMovie, readMovie, readMoviebyId,updateMovie, deleteMovie}