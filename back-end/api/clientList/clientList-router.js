const server = require("express").Router();
const clientListModel = require("./clientList-model");
const {
	findInstructor,
	findClass,
	findUser,
} = require("./clientList-middleware");
// Get All Client Lists
server.get("/", (req, res, next) => {
	clientListModel
		.getClientLists()
		.then((classList) => {
			const count = classList.length;
			if (count === 0) {
				res.status(202).json({ message: "No Client List found in database" });
			} else {
				res.status(200).json({
					classListsCount: count,
					allClassLists: classList,
				});
			}
		})
		.catch((error) => next(error));
});
// Get Client List by Id
server.get("/:id", (req, res, next) => {
	const { id } = req.params;
	clientListModel
		.getClientListById(id)
		.then((classList) => {
			const count = classList.length;
			if (count === 0) {
				res.status(200).json({ message: "Client List not found in database" });
			} else {
				res.status(200).json({
					classListCount: count,
					ClassList: classList,
				});
			}
		})
		.catch((error) => next(error));
});
// Get Client List for Instructor
// server.get("/:id",  (req, res, next) => {
// 	const { id } = req.params;
// 	clientListModel
// 		.getClientListById(id)
// 		.then((classList) => {
// 			const count = classList.length;
// 			if (count === 0) {
// 				res.status(200).json({ message: "Client List not found in database" });
// 			} else {
// 				res.status(200).json({
// 					classListCount: count,
// 					ClassList: classList,
// 				});
// 			}
// 		})
// 		.catch((error) => next(error));
// });
// Create Client List
server.post("/", findClass, findInstructor, findUser, (req, res, next) => {
	const givenClass_id = req.body.class_id;
	const givenUserID = req.body.usersId;

	const instructorFirstName = req.Instructor[0].first_name;
	const instructorLastName = req.Instructor[0].last_name;
	const instructorEmail = req.Instructor[0].email;
	const instructorUsername = req.Instructor[0].username;
	const {
		classId,
		class_name,
		class_time,
		class_am_or_pm,
		class_date,
		class_location,
		class_cost,
	} = req.class.class;
	const {
		userID,
		first_name,
		last_name,
		email,
		username,
		role,
	} = req.foundUser.User;

	if (userID === undefined) {
		res.status(202).json({
			message: `usersID ${givenUserID} recieved does not match any USERID in database`,
		});
	} else if (classId === undefined) {
		res.status(202).json({
			message: `classId ${givenClass_id} recieved does not match any CLASSID in database`,
		});
	} else if (userID === givenUserID && classId === givenClass_id) {
		const clientListInfo = {
			class_id: classId,
			usersId: userID,
		};
		clientListModel
			.createClientList(clientListInfo)
			.then((createdClientList) => {
				const userFullName = first_name + " " + last_name;
				const count = createdClientList.length;
				const classTime = class_time + " " + class_am_or_pm;
				if (count === 0) {
					res.status(204).json({
						message: "New ClassList not added into database",
					});
				} else {
					res.status(201).json({
						message: "Client added in class successfully",
						ClassInfo: {
							ClassID: classId,
							Classname: class_name,
							ClassTime: classTime,
							ClassDate: class_date,
							Location: class_location,
							Cost: class_cost,
						},
						MemberInfo: {
							UserID: userID,
							Name: userFullName,
							Email: email,
							Username: username,
							Role: role,
						},
						InstructorInfo: {
							Firstname: instructorFirstName,
							Lastname: instructorLastName,
							Email: instructorEmail,
							Ussername: instructorUsername,
						},
						FoundClientList: createdClientList,
					});
				}
			})
			.catch((error) => next(error));
	} else {
		res.status(404).json({ message: "wrong class_id/ userId combination" });
	}
});
// Update Client List
server.put("/:id", findClass, findInstructor, findUser, (req, res, next) => {
	const idOfClientListToBeUpdate = req.params.id;
	const givenClass_id = req.body.class_id;
	const givenUserID = req.body.usersId;
	const instructorFirstName = req.Instructor[0].first_name;
	const instructorLastName = req.Instructor[0].last_name;
	const instructorEmail = req.Instructor[0].email;
	const instructorUsername = req.Instructor[0].username;
	const {
		classId,
		class_name,
		class_time,
		class_am_or_pm,
		class_date,
		class_location,
		class_cost,
	} = req.class.class;
	const {
		userID,
		first_name,
		last_name,
		email,
		username,
		role,
	} = req.foundUser.User;

	if (userID === undefined) {
		res.status(202).json({
			message: `usersID ${givenUserID} recieved does not match any USERID in database`,
		});
	} else if (classId === undefined) {
		res.status(202).json({
			message: `classId ${givenClass_id} recieved does not match any CLASSID in database`,
		});
	} else if (
		userID.toString() === givenUserID &&
		classId.toString() === givenClass_id
	) {
		const clientListInfo = {
			class_id: classId,
			usersId: userID,
		};
		clientListModel
			.updateClientListByID(clientListInfo, idOfClientListToBeUpdate)
			.then((updatedClientList) => {
				const userFullName = first_name + " " + last_name;
				const count = updatedClientList.length;
				const classTime = class_time + " " + class_am_or_pm;
				if (count === 0) {
					res.status(204).json({
						message: "New ClassList not added into database",
					});
				} else {
					res.status(201).json({
						message: "Client has been updated in database successfully",
						ClassInfo: {
							ClassID: classId,
							Classname: class_name,
							ClassTime: classTime,
							ClassDate: class_date,
							Location: class_location,
							Cost: class_cost,
						},
						MemberInfo: {
							UserID: userID,
							Name: userFullName,
							Email: email,
							Username: username,
							Role: role,
						},
						InstructorInfo: {
							Firstname: instructorFirstName,
							Lastname: instructorLastName,
							Email: instructorEmail,
							Ussername: instructorUsername,
						},
						FoundClientList: updatedClientList,
					});
				}
			})
			.catch((error) => next(error));
	} else {
		res.status(404).json({ message: "wrong class_id/ userId combination" });
	}
});
// Delete Client List
server.delete("/:id", (req, res, next) => {
	const { id } = req.params;
	clientListModel
		.deleteClientListByID(id)
		.then((deletedClientList) => {
			if (deletedClientList.status === 404) {
				res.status(200).json({
					deleteStatus: deletedClientList.delete,
					message: deletedClientList.message,
				});
			} else {
				res.status(200).json({
					deleteStatus: deletedClientList.delete,
					message: deletedClientList.message,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});

module.exports = server;
