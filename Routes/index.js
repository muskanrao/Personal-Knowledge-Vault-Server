import express from "express"
import {handleGetData, handlePostData, handlePatchVaultReq} from "../Controller/index.js"

const route = express.Router();

//based on type : note|snippet|link|
route.get('/',handleGetData)
route.post('/',handlePostData)
route.patch('/:_id',handlePatchVaultReq)
export default route