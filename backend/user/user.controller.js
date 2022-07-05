const userModel=require('../../db/models/user');
const registrationvalidation=require('../validation/usevalidation')

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
        const user_data=await new userModel(data1);
        await user_data.save();
        res.json({status_code: 201, msg: 'Registered successfully'})
    }
    catch(e){
        res.json({status_code:400,msg:"Please eneter the feilds correctly"})
    }

}
const loginUser=async(req, res)=>{
    const data = req.body;
    try{
        const user = await userModel.findOne({email: data.email});
        if(bcrypt.compareSync(data.password, user.password)){
            let payload={
                uid:data.email
            }
            const token = jwt.sign(payload, jwtsecret,{expiresIn:3600000})
            res.json({msg: "Logged in successfully","token":token,user:user,status_code:200})
        }
        else{
            res.json({status_code: 400, msg:'Passwor wrong'});
        }
    }
    catch(err){
        res.json({status_code: 400, msg: 'Invalid email and password'});
    }
}
module.exports={registeruser,loginUser};