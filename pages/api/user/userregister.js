import connection from '../../../db/connection';
import userRegisterService from '../../../backend/user/user.controller'
import registrationvalidation from '../../../backend/validation/usevalidation'

export default async function userRegister(req, res, next) {
    await connection();
    if(req.method === 'POST') {
        // registrationvalidation(req,res,next)
        try{
            await userRegisterService.registeruser(req, res);
        } catch (e) {
            console.log(e.message);
        }
    }
}