import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        let token = req.headers.authorization; // Use 'authorization' header

        if (!token) {
            return res.status(403).json({ success: false, message: "Not Authorized. Login Again" });
        }

        token = token.split(" ")[1]; // Remove "Bearer " prefix

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Not Authorized. Login Again" });
        }

        next(); // Pass request to next middleware

    } catch (error) {
        console.error(error);
        res.status(403).json({ success: false, message: "Invalid token" });
    }
};


export default adminAuth;
