const joi=require('joi');
import { NextResponse } from "next/server";

function adminloginValidate(req, res, next) {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required()
    })

    const {error} = schema.validate(req.body);

    if(error){
        return res.json({status_code: 406, msg: error.message});
    }
    else{
        return NextResponse.next();
    }
}

module.exports = adminloginValidate;