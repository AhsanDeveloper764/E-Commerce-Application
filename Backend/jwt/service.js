const jwt = require("jsonwebtoken");
const {Access_Secret_Token,Refresh_Secret_Token} = require("../config/index");
const RefreshTokenModel = require("../models/tokenSchema");

class JWTServices{
    // SignAccessToken
    static SignAccessToken(payload,expiryTime){
        return jwt.sign(payload,Access_Secret_Token,{expiresIn:expiryTime})
    }
    // SignRefreshToken
    static SignRefreshToken(payload,expiryTime){
        return jwt.sign(payload,Refresh_Secret_Token,{expiresIn:expiryTime})
    }
    // verifySignAccess
    static verifyAccessToken(token){
        return jwt.verify(token,Access_Secret_Token)
    }
    // verifyRefreshAccess
    static verifyRefreshToken(token){
        return jwt.verify(token,Refresh_Secret_Token)
    }   
    static async StoreRefreshToken(token,userId){
        try {
            const newToken = new RefreshTokenModel({
                token:token,
                userId:userId
            })
            await newToken.save();
        } catch (error) {
            console.log("Error Occured at TokenStore",error);
        }
    }

}

module.exports = JWTServices
