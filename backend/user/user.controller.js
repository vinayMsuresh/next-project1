const userModel=require('../../db/models/user');
const registrationvalidation=require('../validation/usevalidation')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { sendMail } = require('../transpoter/transpotor');
const send_mail = require('../transpoter/sendMail');

const registeruser=async(req,res)=>{
    let first_name=req.body.first_name;
    let last_name=req.body.last_name;
    let email=req.body.email;
    let phone=req.body.phone;
    let address=req.body.address;
    let state=req.body.state;
    let country=req.body.country;
    let pincode=req.body.pincode;
    let password=req.body.password;
    let data={address,state,country,pincode}
    password=bcrypt.hashSync(req.body.password,process.env.saltRounds)
    let data1={first_name:first_name,last_name:last_name,email:email,phone:phone,address:data
        ,password:password}
    try{
        let response=await userModel.findOne({email:email});
        if(response){
            res.json({status_code:401,msg:"Email already exists"})
        }else{
        const user_data=await new userModel(data1);
        await user_data.save();
            send_mail(user_data)
        res.json({status_code: 201, msg: 'Registered successfully'})
        }
    }
    catch(e){
        console.log(e)
        res.json({status_code:400,msg:"Please eneter the feilds correctly"})
    }

}
const loginUser=async(req, res)=>{
    try{
        const userData = await userModel.findOne({email: req.body.email});
        if (userData) {
            if( bcrypt.compareSync(req.body.password, userData.password) ) {
                const payload = { aid: userData.email };
                const token = jwt.sign(payload, process.env.jwtSecret,{expiresIn:3600000})
                res.status(201).json({msg: 'Logged in succcessfully', token});
            }
            else {
                res.status(201).send('Wrong password');
            }
        }
        else {
            res.status(401).send("Email doesn't exists");
        }
    } catch (e) {
        res.status(401).send(e.message);
    }
}
module.exports={registeruser,loginUser};