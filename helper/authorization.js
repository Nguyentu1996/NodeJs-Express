const jwt = require('jsonwebtoken');
const {secret} = require('config.json');

module.exports = {
    generateAccessToken,
    authenticateToken
}

function generateAccessToken(userName) {
    return jwt.sign(userName, secret, { expiresIn: '1800s' });
}
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json({ success: false, message: 'Unauthorized' });

    jwt.verify(token, secret , (err, user) => {

        if (err) return res.status(403).json({success: false, message: 'Invalid Token'})

        req.user = user

        next()
    })
}