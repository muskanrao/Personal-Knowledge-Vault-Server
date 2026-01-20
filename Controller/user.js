import User from "../Models/user.js";
import { setUser } from "../Service/index.js";

async function handleUserSignup(req,res){
    console.log("inside signup")
    const body = req.body;
    console.log("bosy:",body)
    const newUser = await User.create({
        email: body.email,
        username: body.username,
        password: body.password,

    })
    console.log("usercareted",newUser)
    //on first time user signup check the token
    
    return res.status(200).json({msg:"User data updated."})
}

async function handleLogin(req,res){
    console.log("login")
    const body = req.body;
    if( !body.email || !body.password ) return res.status(404).json({error:"Email or password not provided"})
    const user = User.find({email:body.email,password:body.password})
    if (!user) return res.status(404).json({error:"Email or password incorrect"});
    res.user = user;
    const token = setUser(user)
    res.cookie('uid',token)
    return res.json({message: "User logged in"})
    //create token and pass in header -> validate further user actions
}

export {handleLogin, handleUserSignup}