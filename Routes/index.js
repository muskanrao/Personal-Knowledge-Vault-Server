import express from "express"
import {handleGetData} from "../Controller/index.js"

const route = express.Router();

//based on type : note|snippet|link|
route.get(handleGetData)