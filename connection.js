import mongoose from "mongoose";

function connection(url){
    return mongoose.connect(url).then(()=>{
        console.log("mongoose connected.")
    }).catch(()=>{
        console.log("mongoose connection failed.")
    })
}

export default connection