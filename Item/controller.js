import express from 'express'; 
import * as itemService from './service';
import authorization from '../helper/authorization';

const router = express.Router();
// routes
router.get('/', getAll);
router.post('/create', authorization.authenticateToken, create);
module.exports = router;

// router.post('/register', registerSchema, register);
// router.get('/', authorize(), getAll);
// router.get('/current', authorize(), getCurrent);
// router.get('/:id', authorize(), getById)
// router.put('/:id', authorize(), updateSchema, update);
// router.delete('/:id', authorize(), _delete);

function create(req, res, next) {
    itemService.create(req.body).
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
    itemService.getAll().
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
            })
        )
}
