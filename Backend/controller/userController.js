const Joi = require("joi");
const bcrypt = require("bcrypt")
const UserModel = require("../models/userSchema");
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const JWTServices = require("../jwt/service");
const userdto = require("../DataObject/userdto");
const RefreshTokenModel = require("../models/tokenSchema");

const UserController =  {
    async register(req,resp,next){
        console.log("Incoming register Data",req.body);
        const UserRegisterSchema = Joi.object({
            name:Joi.string().min(5).max(30).required(),
            lastName:Joi.string().min(3).max(30).required(),
            email:Joi.string().email().required(),
            password:Joi.string().pattern(passwordRegex).required(),
            confirmPassword:Joi.string().valid(Joi.ref("password")).required(),
            companyName:Joi.string().min(3).max(30).required(),
            addressLine1:Joi.string().max(30).required(),
            addressLine2:Joi.string().max(30).required(),
            city:Joi.string().min(5).max(10).required(),
            state:Joi.string().required(),
            country:Joi.string().required(),
            code:Joi.number().required(),
            phoneNumber:Joi.number().required(),
        }) 

        const {error} = UserRegisterSchema.validate(req.body)                
        if(error){
            return next(error)
        }

        const data = req.body;
        try {
            const emailInUse = await UserModel.findOne({ email: data.email });
            if (emailInUse) {
                return next({ status: 409, message: "Email already used" });
            }
        } catch (error) {
            return next(error)
        }

        const hashedPassword = await bcrypt.hash(data.password,10);

        let accessToken;
        let refreshToken;
        let dataAbc;
        
        try{
            const UserDb = new UserModel({
                name:data.name,
                lastName:data.lastName,
                email:data.email,
                password:hashedPassword,
                companyName:data.companyName,
                addressLine1:data.addressLine1,
                addressLine2:data.addressLine2,
                city:data.city,
                state:data.state,
                country:data.country,
                code:data.code,
                phoneNumber:data.phoneNumber,
            }) 
        
        dataAbc = await UserDb.save();
        accessToken = JWTServices.SignAccessToken({_id:dataAbc._id},"15s");
        refreshToken = JWTServices.SignRefreshToken({_id:dataAbc._id},"60m");
        
        }catch(error){
            return next(error)
        }

        // store Token in Databse
        await JWTServices.StoreRefreshToken(refreshToken,dataAbc._id)

        resp.cookie("accessToken",accessToken,{
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly:true
        })
        resp.cookie("refreshToken",refreshToken,{
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly:true
        })

        const dto = new userdto(dataAbc)
        return resp.status(200).json({
            message:"User Registered Successfully",
            data:dto,
            auth:true
        })
    },
    async login(req,resp,next){
        
        const loginSchema = Joi.object({
            email:Joi.string().email().required(),
            password:Joi.string().required(),
            // login kay waqt regex use nhi krtay hein 
        })
        
        const {error} = loginSchema.validate(req.body);
        if(error){
            return next(error)
        }
        
        const {email,password} = req.body;
        let user;
        try {
            user = await UserModel.findOne({email:email})
            if(!user){
                const error = {
                    status:401,
                    message:"Invalid Email"
                }
                return next(error)
            }

            const match = await bcrypt.compare(password,user.password)
            if(!match){
                const error = {
                    status:401,
                    message:"Your Password Does Not Match"
                }
                return next(error)
            }

        } catch (error) {
            return next(error)
        }
        
        const accessToken = JWTServices.SignAccessToken({_id:user._id},"15s");
        const refreshToken = JWTServices.SignRefreshToken({_id:user._id},"60m");

        await RefreshTokenModel.updateOne(
            {userId:user._id},
            {token:refreshToken},
            {upsert:true},
        )
        resp.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        })
        
        resp.cookie("refreshToken",refreshToken,{
            maxAge:1000 * 60 * 60 * 24,
            httpOnly:true,
        })
        
        const dto = new userdto(user)
        return resp.status(200).json({
            message:"User Login Successfully",
            data:dto,
            auth:true
        })
    },
    async logOut(req,resp,next){
        const refreshToken = req.cookies;
        try {
            await RefreshTokenModel.deleteOne({token:refreshToken})
        } catch (error) {
            return next(error)
        }
        // delete Cookies
        resp.clearCookie("accessToken")
        resp.clearCookie("refreshToken")
        // responce 
        resp.status(200).json({
            message:"User has been logout",
            user:null,
            auth:false
        })
        // is responce say hmein client side par pta chlaga user authentic hay ya UnAuthentic hay
    },
    async forgetPassword(req,resp,next){

    },
}
module.exports = UserController;