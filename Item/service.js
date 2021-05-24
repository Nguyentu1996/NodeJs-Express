import connection  from '../helper/connection';


module.exports = {
    getAll,
    create
};
async function create(req) {
    
    const newIem = await connection.Item.create({
        item: req.item,
        description: req.description,
        createDate: new Date(),
        isDelete: false,
        image: req.image
    });
    return getAll()
}
async function getAll() {
    return await connection.Item.findAll({where: {isDelete: false}});
}
