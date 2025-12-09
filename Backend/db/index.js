const mongoose = require("mongoose");
const {Connection_String} = require("../config/index")

const dbConnect = async () => {
    try {
        const db_conn = await mongoose.connect(Connection_String)
        console.log(`Database in Connected to Host ${db_conn.connection.host}`);
    } catch (error) {
        console.error("Database Connectivity Error",error.message);
    } 
}

module.exports = dbConnect