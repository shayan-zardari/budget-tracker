

const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
const token = req.head('Authorization');
if(!token){
    return res.status(401).json({error:"Access denied"})
}
try {
    const decoded = jwt.verify(token, 'UChqzRkb7y');
    req.userId = decoded.userId;
    next();
    
} catch (error) {
    res.status(401).json({error: 'Invalid Token'})
    
}


}

module.exports= verifyToken;