import mongoose from "mongoose";

const authTokenSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        unique: true
    },
    token:{
        type:String,
        required:true,
        unique:true
    }
})

const authToken = mongoose.model('authToken',authTokenSchema);
export default authToken;