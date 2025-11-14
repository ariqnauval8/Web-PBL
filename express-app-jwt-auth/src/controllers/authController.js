const { response } = require("express");
const { prisma } = require("../config/utils");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const register = async (request, response) => {
    let {email, name, password} = request.body

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(user){
        response.json({
            data : null,
            message : "Sorry email already registered",
            status : "exist"
        })
    }else{
    
    const hashedPassword = await bcrypt.hash(password, 10)

    try{
        await prisma.user.create({
            data : {
                email,
                name,
                password : hashedPassword
            }
        })
        response.json({
            data : null,
            message : "user successfully registered",
            status : "registered"
        })
        return
    }catch(err){
        response.json({
            data : null,
            message : err,
            status: "error"
        })
    }
    }
}

const login = async (request, response) => {
    const {email, password} = request.body

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user || !(await bcrypt.compare(password,user.password))){
        response.json({
            data: null,
            message: "email atau password salah",
            status: "invalid"
        })
        return
    }

    const accesToken = jwt.sign({email},process.env.JWT_SECRET)
    response.json({accesToken})
}



module.exports = {register, login}