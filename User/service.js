const connection = require('../helper/connection');

module.exports = {
    getAll,
    create,
    update,
    deleteFl
};
async function create(req) {
    
    const newUser = await connection.User.create({
        userName: req.userName,
        description: req.description,
        createDate: new Date(),
        isDelete: false,
        image: req.image,
        dob: new Date(),
        role: req.role,
        password: req.password

    });
    return getAll()
}

async function getAll() {
    return await connection.User.findAll({where: {isDelete: false}});
}

async function update(req) {
    const user = await connection.User.update({
        userName: req.userName,
        description: req.description,
        image: req.image,
        role: req.role
    }, {where: {id: req.id}})

}

async function deleteFl() {
    const user = await connection.User.destroy({
        isDelete: true
    }, {where: {id: req.id}})
}
