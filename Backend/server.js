const express = require("express")
const cors = require("cors")
const app = express()
const {PORT} = require("./config/index")
const dbConnect = require("./db/index")
const cookieParser = require("cookie-parser")
const router = require("./routes/index")
const errorHandler = require("./middleware/errorhandler")

const corsOption = {
    credentials:true,
    origin:["http://localhost:5173"]
}

app.use(express.json())
app.use(cors(corsOption))
app.use("/api",router)
app.use(cookieParser)
dbConnect()

app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT} Port`);
})