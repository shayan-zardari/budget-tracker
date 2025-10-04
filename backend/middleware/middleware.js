import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../configurations/env.configure.js";

const verifyToken = (req,res,next) => {

  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
  
  try {

    if ( !token ) {
        return res.status(401).json({
            success: false,
            error: "No token provided" 
        });
    }

    const decoded = jwt.verify(token, JWT_SECRET); // Verify token
    console.log(decoded);
    req.user = decoded;

    next(); // Proceed to the next middleware/controller

  } catch (error) {

    return res.status(401).json({
        success: false,
        error: "Invalid token" 
    });

  }
}

export default verifyToken;