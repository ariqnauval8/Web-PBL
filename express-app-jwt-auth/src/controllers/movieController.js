const { request, response } = require("express");
const { prisma } = require("../config/utils");
const {getCurrentUser} = require("../config/libs")


const createMovie  = async (request, response) => {
    let {title, year, categoryId} = request.body

    try{
        const user = await getCurrentUser(request.user)
        let movies = await prisma.movie.create({
            data : {
                title,
                year,
                categoryId,
                userId: Number(user.id)
            }
        })
        response.json({
            data: movies,
            message: "movie was successfully created",
            status: "success"
        })
        return
    }catch(err){
        response.json({
            data: null,
            message: err,
            status: "error"
        })
    }
}

const getMovie  = async (request, response) => {
    try{
        let movies = await prisma.movie.findMany({
            include:{
                category:true,
                user:true
            }
        })
        response.json({
            data: movies,
            message: "movie was successfully get",
            status: "success"
        })
        return
    }catch(err){
        response.json({
            data:null,
            message:err,
            status:"error"
        })
    }
}

const getMoviebyId  = async (request, response) => {
    let {id} = request.params
    try{
        let movies = await prisma.category.findUnique({
            where : {
                id : Number(id)
            }
        })

        if(movies != null){
            response.json({
            data: categories,
            message: "movie was successfully get",
            status: "success"
        })
        }else{
            response.json({
            data: categories,
            message: "movie was not found",
            status: "error"
            })
        }
        console.log(categories)
        return
    }catch(err){
        response.json({
            data:null,
            message:err,
            status:"error"
        })
    }
}
 
const updateMovie = async (request, response) => {
    let {title, description} = request.body
    let {id} = request.params

    try{
        const user = await getCurrentUser(request.user)
        let movies =  await prisma.movie.update({
            data:{
                title,
                year,
                categoryId,
                userId : Number(user.id)
            },
            where:{
                id : Number(id)
            }
        })
        response.json({
            data: movies,
            message: "movie was successfuly update",
            status: "success"
        })
        return
    }
    catch(err){
        response.json({
            data: movies,
            message: err,
            status : "error"
        })
    }
}



const deleteMovie = async (request, response) => {
    let {id} = request.params

    try{
        await prisma.movie.delete({
            where: {
                id: Number(id)
            }
        })
        return
    }catch(err){
        response.json({
            data: null,
            message:err,
            status:"error"
        })
    }
}

module.exports = {createMovie, getMovie, getMoviebyId, updateMovie, deleteMovie}