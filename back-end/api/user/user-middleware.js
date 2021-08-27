const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

const makeSureTheyAreMembers = (req, res, next) => {        
    const token = req.headers.authorization;            
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) {
			console.log(token);
			console.log(JWT_SECRET);
			console.log(err);
			res.status(401).json({ message: "Token invalid" });
		} else {            
			req.decodedJwt = decoded;	            
            if(req.decodedJwt.role) {
                const trimmed = req.decodedJwt.role.trim();                
                const checkRole = (roleName) => {
                    if (roleName === "Instructor" || roleName === "Client") {
                        next();
                    } else {
                        res.status(404).json({
                            message: "Wrong credentials must be a Instructor or Client to use this feature",
                        });
                    }
                };                
                checkRole(trimmed);
            } else {
                // res.status(404).json({
                //     message: "That's not an Authenticated Instructor.",
                // });
                next();
            }
		}
	});
	
};

module.exports = {	    
	makeSureTheyAreMembers    
};