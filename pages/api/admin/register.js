import connection from '../../../db/connection';
import adminService from '../../../backend/admin/admin.controller';
import adminloginValidate from '../../../backend/validation/adminvalidation';

export default async function adminRegister(req, res, next) {
    await connection();
    if(req.method === 'POST') {
        adminloginValidate(req,res,next)
        try{
            await adminService.register(req, res);
        } catch (e) {
            console.log(e.message);
        }
    }
}