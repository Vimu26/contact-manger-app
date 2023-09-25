const userService = require("../services/user.service");

const registerController = async (req, res) => {
  try {
    const user = await userService.registerService(req.body);
    if (user.error) {
      res.status(user.status).json({ error: user.error });
    }
    else {
      res.json({ message: "Register User", data: user });
    }
  } catch (err) {
    res.status(err.status).json({ error: err.error });
  }
};

const loginUserController = async (req, res) => {
  try{
     const user = await userService.loginService(req.body);
  if(user.error){
    res.status(user.status).json({ error: user.error });
  }
  else{
    res.status(200).json({message : "login Successful" , data : user});
  }
  }
  catch(err){
    res.status(err.status).json({ error: err.error });
  } 
};

const currentUserController = async (req, res) => {
  res.json({ message: "Current User" , data : req.user });
};

module.exports = {
  registerController,
  loginUserController,
  currentUserController,
};
