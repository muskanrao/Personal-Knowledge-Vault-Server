import mongoose from "mongoose";

//create schema -> using schema create model -> using model exort it
const vaultItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type:String,
        enum: ['note', 'link', 'snippet', 'idea'],
        required: true
    },
    content: {
        type:String,
    }
},{timestamp:true})

//model
const vaultItem = mongoose.model('vaults', vaultItemSchema)
export default vaultItem