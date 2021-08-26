const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");
const db = require("../data/db-config");
const restricted = (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) {
				res.status(401).json({ message: "Token invalid" });
			} else {
				req.decodedJwt = decoded;
				console.log("here");
				next();
			}
		});
	} else {
		res.status(401).json({ message: "Token required" });
	}
};
const only = (role_name) => (req, res, next) => {
	if (req.decodedJwt.Role === role_name) {
		next();
	} else {
		res.status(403).json({ message: "This is not for you" });
	}
};
const checkUserExists = async (req, res, next) => {
	const { username } = req.body;

	const member = await db("userInfo as u").where("u.username", username);
	const user = member[0];
	const dataCount = member.length;
	if (dataCount === 0) {
		res.status(404).json({
			message: "This username/password combination does not exist in Database.",
		});
	} else if (user.username === username) {
		req.newUser = user;
		next();
	} else {
		res
			.status(404)
			.json({ message: "wrong username/password/role coombination" });
	}
};
const makeSureTheyAreAClient = (req, res, next) => {
	const role = req.decodedJwt.Role;
	const trimmed = role.trim();
	const TargetAnswer = "Client";
	const checkRole = (roleName) => {
		if (roleName === TargetAnswer) {
			next();
		} else {
			res.status(404).json({
				message: "Wrong credentials must be a client to usse this feature",
			});
		}
	};
	checkRole(trimmed);
};
const makeSureTheyAreInstructor = (req, res, next) => {
	const role = req.decodedJwt.Role;
	const trimmed = role.trim();
	const TargetAnswer = "Instructor";
	const checkRole = (roleName) => {
		if (roleName === TargetAnswer) {
			next();
		} else {
			res.status(404).json({
				message: "Wrong credentials must be a Instructor to usse this feature",
			});
		}
	};
	checkRole(trimmed);
};
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
			console.log("here");
			console.log(decoded);
			// next();
		}
	});
	const role = req.decodedJwt.Role;

	const trimmed = role.trim();
	const checkRole = (roleName) => {
		if (roleName === "Instructor" || roleName === "Client") {
			next();
		} else {
			res.status(404).json({
				message: "Wrong credentials must be a Instructor to usse this feature",
			});
		}
	};
	checkRole(trimmed);
};

module.exports = {
	restricted,
	checkUserExists,
	makeSureTheyAreAClient,
	makeSureTheyAreInstructor,
	only,
	makeSureTheyAreMembers,
};
