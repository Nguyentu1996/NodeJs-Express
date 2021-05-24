const express = require('express');
const router = express.Router();
const userService = require('./service');
// routes
router.get('/', getAll);
router.post('/create', create);

// router.post('/register', registerSchema, register);
// router.get('/', authorize(), getAll);
// router.get('/current', authorize(), getCurrent);
// router.get('/:id', authorize(), getById)
// router.put('/:id', authorize(), updateSchema, update);
// router.delete('/:id', authorize(), _delete);

module.exports = router;
function create(req, res, next) {
    userService.create(req.body).
        then(items => res.status(200).json(
            {
                result: items,
                success: true,
                message: 'create success'
            })
        ).catch(err => res.status(200).json(
            {
                success: false,
                message: 'Server error. Please try again.',
                error: err.message
            })
        )
}
function getAll(req, res, next) {
    userService.getAll().
        then(items => res.status(200).json(
            {
                result: items,
                success: true,
                message: 'get success'
            })
        ).catch(err => res.status(200).json(
            {
                success: false,
                message: 'Server error. Please try again.',
                error: err.message
            }))
}
