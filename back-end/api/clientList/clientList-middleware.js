const userModel = require("../user/user-model");
const classModel = require("../class/class-model");

const findUser = async (req, res, next) => {
	const { usersId } = req.body;
	userModel
		.findUserInfoByIdforClientList(usersId)
		.then((response) => {
			if (response.code === 101) {
				res.status(202).json(response);
			} else {
				req.foundUser = response;
				next();
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
const findClass = async (req, res, next) => {
	const { class_id } = req.body;
	classModel
		.findClassByIdforClientList(class_id)
		.then((response) => {
			if (response.code === 101) {
				res.status(202).json(response);
			} else {
				req.class = response;
				next();
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
const findInstructor = async (req, res, next) => {
	const { class_instructor_username } = req.class.class;

	if (class_instructor_username) {
		userModel
			.getUserInfoByUserName(class_instructor_username)
			.then((userInfo) => {
				const count = userInfo.length;
				if (count > 0) {
					req.Instructor = userInfo;
					next();
				} else {
					res.status(404).json({
						message: `Instructor by the name of ${class_instructor_username} is not in the database`,
					});
				}
			})
			.catch((error) => console.log(error));
	}
};
module.exports = {
	findClass,
	findInstructor,
	findUser,
};
