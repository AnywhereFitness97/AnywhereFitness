const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

const validationClassFields = (req, res, next) => {    
    if(req.body.class_name && 
        req.body.class_type && 
        req.body.class_time && 
        req.body.class_duration &&
        req.body.class_intensity_level &&
        req.body.class_location &&
        req.body.class_client_list_id &&
        req.body.class_cost        
    ) {
        next()
    } else {
        res.status(201).json({
            message: "The information is not available.",
        });
    }
}
const makeSureTheyAreInstructor = (req, res, next) => {    
    const token = req.headers.authorization;        
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) {
			console.log(token);
			console.log(JWT_SECRET);
			console.log(err);
			res.status(401).json({ message: "Token invalid" });
		} else {            
			req.decodedJwt = decoded;	
            console.log("role", req.decodedJwt.role)	
            if(req.decodedJwt.role) {
                const trimmed = req.decodedJwt.role.trim();
                const TargetAnswer = "Instructor";
                const checkRole = (roleName) => {
                    if (roleName === TargetAnswer) {
                        next();
                    } else {
                        res.status(404).json({
                            message: "That's not an Authenticated Instructor.",
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
    validationClassFields,
	makeSureTheyAreInstructor	
};