const {ValidationError} = require("joi") 

const errorHandler = (error,req,resp,next) => {
    let status = 500;
    let data = {
        message:"Internal Server Error"
    }
    if(error instanceof ValidationError){
        status = 400;
        data.message = error.message;
        return resp.status(status).json(data)
    }
    if(error.status){
        status = error.status;
    }
    if(error.message){
        data.message = error.message
    }
    return resp.status(status).json(data)
}

module.exports = errorHandler