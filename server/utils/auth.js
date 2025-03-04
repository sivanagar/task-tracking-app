import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

const secretKey = process.env.JWT_SECRET; // Replace with your actual secret key

// Function to generate a JWT token
function generateToken(payload) {
    return sign(payload, secretKey, { expiresIn: '1h' });
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
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    const decoded = verifyToken(token);
    if (!decoded) return res.sendStatus(403);

    req.user = decoded;
    next();
}

export default {
    generateToken,
    verifyToken,
    authenticateToken
};