const { request, response } = require("express");
const { prisma } = require("../config/utils");
const {getCurrentUser} = require("../config/libs")

const createCategory  = async (request, response) => {
    // #swagger.tags = ['Category']
       /* #swagger.security = [{
            "bearerAuth": []
    }] */
    let {title, description} = request.body

    try{
        const user = await getCurrentUser(request.user)
        console.log(user)
        let categories = await prisma.category.create({
            data : {
                title,
                description,
                userId : user.id
            }
        })
        response.json({
            data: categories,
            message: "Category was successfully created",
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

const getCategory  = async (request, response) => {
    // #swagger.tags = ['Category']
    try{
        let categories = await prisma.category.findMany()
        response.json({
            data: categories,
            message: "Categories was successfully get",
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

const getCategorybyId  = async (request, response) => {
    // #swagger.tags = ['Category']
    let {id} = request.params
    try{
        let categories = await prisma.category.findUnique({
            where : {
                id : Number(id)
            }
        })

        if(categories != null){
            response.json({
            data: categories,
            message: "Categories was successfully get",
            status: "success"
        })
        }else{
            response.json({
            data: categories,
            message: "Categories was not found",
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
 
const updateCategory = async (request, response) => {
    // #swagger.tags = ['Category']
       /* #swagger.security = [{
            "bearerAuth": []
    }] */
    let {name, description} = request.body
    let {id} = request.params

    try{
        const user = await getCurrentUser(request.user)
        let category =  await prisma.category.update({
            data:{
                name,
                description,
                userId: Number(user.id)
            },
            where:{
                id : Number(id)
        
            }
        })
        response.json({
            data: category,
            message: "category was successfuly update",
            status: "success"
        })
        return
    }
    catch(err){
        response.json({
            data: category,
            message: err,
            status : "error"
        })
    }
}



const deleteCategory = async (request, response) => {
    // #swagger.tags = ['Category']
       /* #swagger.security = [{
            "bearerAuth": []
    }] */
    let {id} = request.params

    try{
        await prisma.category.delete({
            where: {
                id: id
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

module.exports = {createCategory, getCategory, getCategorybyId, updateCategory, deleteCategory}