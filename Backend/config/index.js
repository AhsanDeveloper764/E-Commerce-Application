const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3000;
const Connection_String = process.env.Connection_String;
const Access_Secret_Token = process.env.Access_Secret_Token;
const Refresh_Secret_Token = process.env.Refresh_Secret_Token;
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH;
const CloudName = process.env.CloudName;
const apikey = process.env.apikey;
const apiSecret = process.env.apiSecret;

module.exports = {
    PORT,
    Connection_String,
    Access_Secret_Token,
    Refresh_Secret_Token,
    BACKEND_SERVER_PATH,
    CloudName,
    apikey,
    apiSecret
}