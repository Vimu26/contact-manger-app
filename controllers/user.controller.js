const userService = require("../services/user.service");

const registerUserController = async (req,res) => {
    const user = await userService.registerService();
    res.json({message : "Register User" ,  data : user});
}

const loginUserController = async (req,res) => {
    res.json({message : "Login User"})
}

const currentUserController = async (req,res) => {
    res.json({message : "Current User"})
}



module.exports = {registerUserController , loginUserController , currentUserController}