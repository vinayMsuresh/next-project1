import connection from '../../../db/connection';
import adminService from '../../../backend/admin/admin.controller';

export default async function adminRegister(req, res) {
    await connection();
    if(req.method === 'POST') {
        try{
            await adminService.register(req, res);
        } catch (e) {
            console.log(e.message);
        }
    }
}