import jsonwebtoken from "jsonwebtoken";

const secretKey = "JsonWebTokenNpm##projectVault"

function getUser(token){
    //token stores the db row data
    try{
        const isUser = jsonwebtoken.verify(token,secretKey);
        return isUser;
    }catch{
        return null;
    }
    
}

function setUser(user){
    return jsonwebtoken.sign({
        _id: user.id,
        email: user.email
    },secretKey)
}

export {setUser,getUser};