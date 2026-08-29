const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

    let token;

    // Check Authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {

        token = req.headers.authorization.split(" ")[1];

    }

    // Token not found
    if (!token) {
        return res.status(401).json({
            message: "Not authorized. Token not found."
        });
    }

    try {

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Save user information
        req.user = decoded;

        // Continue
        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }
};

module.exports = protect;