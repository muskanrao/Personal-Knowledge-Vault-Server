import { getUser } from "../Service/index.js";

function restrictedLogin(req,res,next){
    const token = req.cookie('uid');
    const isUser = getUser(token);
    if (!isUser) return res.status(404).json({error: "Invalid User"})
    res.user = isUser;
    next();
}

export default restrictedLogin;