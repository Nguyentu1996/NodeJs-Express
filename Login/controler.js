import express from 'express'; 
import loginService from './service';
import authorization from '../helper/authorization';
const router = express.Router();


// routes
router.post('/', genneratorToken);
module.exports = router;

function genneratorToken(req, res, next) {
    loginService.login(req.body).then(
        result => {
            if (result) {
                const token = authorization.generateAccessToken({ username: req.body.userName });
                return res.json({success: true, message: 'Login Success', result: token})
            } else return res.json({success: true, message: 'Login Fail', result: ''})
        }
    ).catch(err => 
        res.json({success: false, message: 'Login Fail', result: ''})
    )
}