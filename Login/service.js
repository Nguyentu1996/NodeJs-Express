import connection  from '../helper/connection';

module.exports = {
    login
};
async function login(req) {

    const user = await connection.User.findOne({where: { userName: req.userName, password: req.password, isDelete: false }});
    if(user instanceof connection.User) return true;
    return false

}
