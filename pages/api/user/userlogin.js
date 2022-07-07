import connection from '../../../db/connection';
import { loginvalidation } from '../../../backend/validation/usevalidation';
import loginService from '../../../backend/user/user.controller'

export default async function userLogin(req, res, next) {
    await connection();
    if(req.method === 'POST') {
        loginvalidation(req,res,next)
        try{
            await loginService.loginUser(req, res);
        } catch (e) {
            console.log(e.message);
        }
    }
}