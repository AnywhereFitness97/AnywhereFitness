const db = require("../data/db-config");

//GET ALL CLASSES
function getClasses() {
	const classes = db("class");
	return classes;
}
function findClassById(id) {
	const foundClass = db("class as c").where("c.classId", id);
	return foundClass;
}
function addClass(newClass) {
	const brandNewClass = db("class").insert(newClass).returning("*");
	return brandNewClass;
}
function updateClass(classToUpdate, id) {
	return db("class as c")
		.update(classToUpdate)
		.where("c.classId", id)
		.returning("*");
}
async function findClassByIdforClientList(given_Class_id) {
	const classInDB = await findClassById(given_Class_id);
	const classCount = classInDB.length;
	const foundClass = classInDB[0];
	const errorMessage = {
		code: 101,
		status: "Failed",
		message: "Class Not Found",
	};
	const successMessage = {
		code: 201,
		status: "Success",
		message: "Class Found",
		class: foundClass,
	};
	if (classCount === 0) {
		return errorMessage;
	} else {
		return successMessage;
	}
}
async function deleteClass(id) {
	const user = await findClassById(id);
	const errorMessage = {
		status: 404,
		delete: "Failed",
		message: `User not found in database`,
	};
	const successMessage = {
		status: 200,
		delete: "Success",
		message: `User has been deleted successfully`,
	};
	const numberOfUsersByGivenId = user.length;
	if (numberOfUsersByGivenId === 0) {
		return errorMessage;
	} else {
		await db("class as c").where("c.classId", id).del();
		return successMessage;
	}
}

module.exports = {
	findClassByIdforClientList,
	getClasses,
	findClassById,
	addClass,
	updateClass,
	deleteClass,
};
