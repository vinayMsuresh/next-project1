import bcrypt from 'bcrypt';
import adminModel from '../../db/models/admin';
import jwt from 'jsonwebtoken';
const register = async(req, res) => {
    let { email, password } = req.body;
        const hashPassword = bcrypt.hashSync(password, process.env.saltRounds);
        try{
            const admins = await adminModel.find({});
            if(admins.length === 0){
                await adminModel.create({email, password: hashPassword});
                res.status(201).send('Registered successfully');
            }
            else{
                res.status(409).send('Already exists');
            }
        } catch(e) {
            res.status(401).send(e.message);
        }
};

const login = async(req, res) => {
    try{
        const adminData = await adminModel.findOne({email: req.body.email});
        if (adminData) {
            if( bcrypt.compareSync(req.body.password, adminData.password) ) {
                const payload = { aid: adminData.email };
                const token = jwt.sign(payload, process.env.jwtSecret,{expiresIn:3600000})
                res.status(201).json({message: 'Logged in succcessfully', token});
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

module.exports = {
    register,
    login,
}