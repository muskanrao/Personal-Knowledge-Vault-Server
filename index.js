import express from "express"
import connection from "./connection.js";
import authRouter from './Routes/user.js'

const app = express();
const PORT = 3001;

//midleware for cookie and json
//restricted login can be done in react.
connection('mongodb://XXXXX/vaultItemApp')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/user',authRouter)
//routes
app.listen(PORT, ()=> {
    console.log(`Server connected on ${PORT}`)
})
