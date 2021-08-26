const db = require("../data/db-config");

//GET ALL USERS INFO
function getAllUsersInfo() {
	return db("userInfo");
}
//GET USER INFO BY ID
function getUserInfoById(id) {
	return db("userInfo as u").where("u.userID", id);
}
//GET USER INFO BY name
function getUserInfoByUserName(username) {
	return db("userInfo as u").where("u.username", username);
}
// ADD USER
function addNewUser(user) {
	const newUser = db("userInfo").insert(user).returning("*");
	return newUser;
}
//UPDATE USER
function updateUser(user, id) {
	return db("userInfo as u").update(user).where("u.userID", id).returning("*");
}
//DELETE USER BY ID
async function deleteUserInfo(id) {
	const user = await getUserInfoById(id);
	const errorMessage = {
		status: 404,
		delete: "Failed",
		message: `User's Data not found in database`,
	};
	const successMessage = {
		status: 200,
		delete: "Success",
		message: `User's Data has been deleted successfully`,
	};
	const numberOfUsersByGivenId = user.length;
	if (numberOfUsersByGivenId === 0) {
		return errorMessage;
	} else {
		await db("userInfo as u").where("u.userID", id).del();
		return successMessage;
	}
}
async function findUserInfoByIdforClientList(given_User_Id) {
	const UserInDB = await getUserInfoById(given_User_Id);
	const UserCount = UserInDB.length;
	const foundUser = UserInDB[0];
	const errorMessage = {
		code: 101,
		status: "Failed",
		message: "User Not Found",
	};
	const successMessage = {
		code: 201,
		status: "Success",
		message: "User Found",
		User: foundUser,
	};
	if (UserCount === 0) {
		return errorMessage;
	} else {
		return successMessage;
	}
}

module.exports = {
	getAllUsersInfo,
	getUserInfoById,
	getUserInfoByUserName,
	addNewUser,
	updateUser,
	deleteUserInfo,
	findUserInfoByIdforClientList,
};
