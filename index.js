import express from "express";
import connection from "./connection.js";
import authRouter from './Routes/user.js';
import apiRoute from './Routes/index.js';
import cors from "cors"

const app = express();
const PORT = 3001;

//midleware for cookie and json
//restricted login can be done in react.
connection('mongodb://XXXXX/vaultItemApp')

//middleware
app.use(cors({
    origin: "http://localhost:5173", // your React app
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/user',authRouter)
app.use('/api/vault',apiRoute)
//routes
app.listen(PORT, ()=> {
    console.log(`Server connected on ${PORT}`)
})
