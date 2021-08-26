const server = require("express").Router();
const classModel = require("./class-model");

// Get All Classes
server.get("/", (req, res, next) => {
	classModel
		.getClasses()
		.then((classes) => {
			const count = classes.length;
			if (count === 0) {
				res.status(200).json({ message: "No classes found in database" });
			} else {
				res.status(200).json({ classCount: count, allClasses: classes });
			}
		})
		.catch((error) => next(error));
});
// Get Classes by Id
server.get("/:id", (req, res, next) => {
	const { id } = req.params;
	classModel
		.findClassById(id)
		.then((foundClass) => {
			const count = foundClass.length;

			if (count === 0) {
				res
					.status(200)
					.json({ message: "This class was not found in database" });
			} else {
				res.status(200).json({ classCount: count, Class: foundClass });
			}
		})
		.catch((error) => next(error));
});
// Get a List of Classes Instructor Created
server.post;
// Create Class
server.post("/", (req, res, next) => {
	const {
		class_name,
		class_time,
		class_am_or_pm,
		class_date,
		class_duration,
		class_type,
		class_intensity_level,
		class_location,
		class_description,
		class_instructor_username,
		class_cost,
	} = req.body;
	const newClass = {
		class_name,
		class_time,
		class_am_or_pm,
		class_date,
		class_duration,
		class_type,
		class_intensity_level,
		class_location,
		class_description,
		class_instructor_username,
		class_cost,
	};
	classModel
		.addClass(newClass)
		.then((createdClass) => {
			const count = createdClass.length;
			if (count === 0) {
				res.status(204).json({ message: "New Class not added into database" });
			} else {
				res.status(201).json({
					createdClassCount: count,
					newClass: createdClass,
				});
			}
		})
		.catch((error) => next(error));
});
// Update Class by Id
server.put("/:id", (req, res, next) => {
	const { id } = req.params;
	const {
		class_name,
		class_time,
		class_am_or_pm,
		class_date,
		class_duration,
		class_type,
		class_intensity_level,
		class_location,
		class_description,
		class_instructor_username,
		class_cost,
	} = req.body;
	const classToUpdate = {
		class_name,
		class_time,
		class_am_or_pm,
		class_date,
		class_duration,
		class_type,
		class_intensity_level,
		class_location,
		class_description,
		class_instructor_username,
		class_cost,
	};
	classModel
		.updateClass(classToUpdate, id)
		.then((updatedClass) => {
			const count = updatedClass.length;
			if (count === 0) {
				res.status(202).json({ message: "Class Did Not Update" });
			} else {
				res.status(201).json({
					Code: 201,
					UpdatedStatus: "Class Updated Successfully",
					UpdatedClassCount: count,
					UpdatedClass: updatedClass,
				});
			}
		})
		.catch((error) => next(error));
});
// Delete CLass
server.delete("/:id", (req, res, next) => {
	const { id } = req.params;
	classModel
		.deleteClass(id)
		.then((deletedClass) => {
			if (deletedClass.status === 404) {
				res.status(200).json({
					deleteStatus: deletedClass.delete,
					message: deletedClass.message,
				});
			} else {
				res.status(200).json({
					deleteStatus: deletedClass.delete,
					message: deletedClass.message,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});

module.exports = server;
