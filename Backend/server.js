const express = require("express")
const {PORT} = require("./config/index")
const dbConnect = require("./db/index")
const cookieParser = require("cookie-parser")
const UserRouter = require("./routes/userRoutes")
const proRouter = require("./routes/productRoutes")
const errorHandler = require("./middleware/errorhandler")

const app = express()
const cors = require("cors")
const corsOption = {
    credentials:true,
    origin:["http://localhost:5173"]
}

app.use(express.json())
app.use(cors(corsOption))
app.use("/api",UserRouter)
app.use("/product",proRouter)
app.use(cookieParser)
dbConnect()

app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT} Port`)
})