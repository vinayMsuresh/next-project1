const joi=require('joi');
import { NextResponse } from "next/server";
function registrationvalidation(req,res,next){
    const schema=joi.object({
        first_name: joi.string().min(4).required(),
        last_name : joi.string().min(2).required(),
        email : joi.string().email().required(),
        phone : joi.number().min(10).required(),
        password : joi.string().min(8).required(),
        address: joi.array().min(16).required()

    })
    const {error} = schema.validate(req.body);

    if(error){
        return res.json({status_code: 406, msg: error.message});
    }
    else{
        return NextResponse.next();
    }

}
function loginvalidation(req,res,next){
    const schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(8).required()
    })
    const {error} = schema.validate(req.body);

    if(error){
        return res.json({status_code: 406, msg: error.message});
    }
    else{
        return NextResponse.next();
    }
}
module.exports={registrationvalidation,loginvalidation};