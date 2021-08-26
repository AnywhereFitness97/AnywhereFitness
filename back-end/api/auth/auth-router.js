const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const server = require("express").Router();
const { JWT_SECRET } = require("../../config/config");
const userModel = require("../user/user-model");
const {
	restricted,
	checkUserExists,
	makeSureTheyAreAClient,
	makeSureTheyAreInstructor,
	only,
	makeSureTheyAreMembers,
} = require("./auth-middleware");
server.post("/register", (req, res, next) => {
	const { first_name, last_name, email, username, password, role } = req.body;
	const hash = bcryptjs.hashSync(password, 10);

	const userInfo = {
		first_name,
		last_name,
		email,
		username,
		password: hash,
		role,
	};
	userModel.addNewUser(userInfo).then((response) => {
		console.log(response);
		const dataCount = response.length;
		if (dataCount === 0) {
			res
				.status(500)
				.json({ message: "User Data did not make it into database" });
		} else {
			res.status(201).json({
				code: 100,
				message: `Welcome to your new gym ${userInfo.first_name}, Allow us to show you all your Client features`,
				NewUserLogin: response[0],
			});
		}
	});
});
server.post("/login", checkUserExists, (req, res, next) => {
	// Given from the User
	const loginPassword = req.body.password;
	// Found User By MiddleWare That Matches Username
	const userID = req.newUser.userid;
	const firstname = req.newUser.first_name;
	const lastname = req.newUser.last_name;
	const email = req.newUser.email;
	const username = req.newUser.username;
	const password = req.newUser.password;
	const role = req.newUser.role;
	// Form the user data into an object
	const user = {
		userID,
		firstname,
		lastname,
		email,
		username,
		password,
		role,
	};
	// Compare Encrypted password with the one given by user
	if (bcryptjs.compareSync(loginPassword, password)) {
		const token = makeToken(user);
		res.status(200).json({
			message: `Welcome back ${user.firstname}, Here is your AccessToken`,
			token: token,
		});
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

function makeToken(user) {
	const payload = {
		UserID: user.userID,
		First_Name: user.FirstName,
		Last_Name: user.LastName,
		Email: user.Email,
		Username: user.Username,
		Role: user.Role,
	};
	const options = {
		expiresIn: "30 seconds",
	};
	return jwt.sign(payload, JWT_SECRET, options);
}
module.exports = server;
