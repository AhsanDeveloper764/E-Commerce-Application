const JWTService = require("../jwt/service");
const userSchema = require("../models/userSchema");

const authentication = async (req,resp,next) => {
    try {
        const {refreshToken,accessToken} = req.cookies;
        if(!refreshToken || !accessToken){
            const error = {
                status:401,
                message:"Unauthorized"
            }
            return next(error)
        }
        let _id;
        try {
            _id = JWTService.SignAccessToken(accessToken)._id
        } catch (error) {
            return next(error)
        }
        let User;
        try {
            User = await userSchema.findOne({_id:_id}) // ye id verification kay bad mili hay hemin 
        } catch (error) {
            return next(error)
        }
        req.user = User;
        next()
    } catch (error) {
        return next(error)
    }
}

module.exports = authentication