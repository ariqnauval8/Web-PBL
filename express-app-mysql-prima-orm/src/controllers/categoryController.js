const { prisma } = require("../config/utils");

const createCategory  = async (request, response) => {
    let {title, description} = request.body

    try{
        let categories = await prisma.category.create({
            data : {
                title,
                description
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

const updateCategory = async (req, res)=>{
  let {name, description} = req.body
  let {id} = req.params

  try{
    let category = await prisma.category.update({
      data:{
        name, description
      },
      where: {
        id: Number(id)
      }
    })
    res.json({data: category, message: "category was successfully updated", status: "success"})
    return
  }catch(err){
    res.json({
      data: null,
      message: err,
      status: "error"
    })
  }
}

const deleteCategory = async (req, res)=>{
  let {id} = req.params

try{
    await prisma.category.deleteMany({
      where: {
        id: Number(id)
      }
    })
    res.json({data: null, message: "category was successfully deleted", status: "success" })
    return
  }catch(err){
    res.json({
      data: null,
      message: err,
      status: "error"
    })
  }

}


module.exports = {createCategory, getCategory, getCategorybyId, updateCategory, deleteCategory}