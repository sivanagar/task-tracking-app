import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

const secretKey = process.env.JWT_SECRET; // Replace with your actual secret key
const expiration = '2h';

// Function to generate a JWT token
function generateToken({ username, email, _id }) {
    const payload = { username, email, _id };

    return sign({ data: payload }, secretKey, { expiresIn: expiration });
}

// Function to verify a JWT token
function verifyToken(token) {
    try {
        return verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

// Middleware to protect routes
function authenticateToken({req}) {

    let token = req.body.token || req.query.token || req.headers.authorization;
    
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();

    }
    
    if (!token) return req;
   

    try {
        const {data} = verify(token, secretKey, { maxAge: expiration });
        req.user = data;
    } catch {
        console.log('Invalid token');
    }

    return req;
    // const decoded = verifyToken(token);
    // if (!decoded) return res.sendStatus(403);

    // req.user = decoded;
    // next();
}

export default {
    generateToken,
    verifyToken,
    authenticateToken
};