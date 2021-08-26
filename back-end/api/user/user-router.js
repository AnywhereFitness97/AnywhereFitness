const express = require("express");
const server = express();
const userModel = require("./user-model");
const bcryptjs = require("bcryptjs");

//GET ALL USERS INFO
server.get("/userinfo", (req, res, next) => {
	userModel
		.getAllUsersInfo()
		.then((users) => {
			const count = users.length;
			if (count === 0) {
				res.status(202).json({
					message: "There are no users in the Database",
				});
			} else {
				res.status(200).json({
					Status: "Success",
					Member_Count: count,
					Members_Info: users,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
//GET USER INFO BY ID
server.get("/userinfo/:id", (req, res, next) => {
	const { id } = req.params;
	userModel
		.getUserInfoById(id)
		.then((users) => {
			const count = users.length;
			if (count === 0) {
				res.status(202).json({
					message: "There are no users in the Database",
				});
			} else {
				res.status(200).json({
					Status: "Success",
					Member_Count: count,
					Members_Info: users,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
// UPDATE USER
server.put("/userinfo/:id", (req, res, next) => {
	const { id } = req.params;
	const { first_name, last_name, email, username, password, role } = req.body;
	const hash = bcryptjs.hashSync(password, 10);
	const userToUpdate = {
		first_name,
		last_name,
		email,
		username,
		password: hash,
		role,
	};
	userModel
		.updateUser(userToUpdate, id)
		.then((updated) => {
			const count = updated.length;
			if (count < 1) {
				res.status(202).json({
					message: "User was not updated successfully in Database",
				});
			} else {
				res.status(200).json({
					Status: "Success",
					Member_Count: count,
					Members_Info: updated,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
// DELETE USER
server.delete("/userinfo/:id", (req, res, next) => {
	const { id } = req.params;
	userModel
		.deleteUserInfo(id)
		.then((user) => {
			if (user.status === 404) {
				res
					.status(200)
					.json({ deleteStatus: user.delete, message: user.message });
			} else {
				res
					.status(200)
					.json({ deleteStatus: user.delete, message: user.message });
			}
		})
		.catch((error) => {
			next(error);
		});
});

module.exports = server;
