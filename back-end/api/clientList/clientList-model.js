const db = require("../data/db-config");

//GET ALL Client LISTS
function getClientLists() {
	return db("clientList");
}
//GET  Client LISTS BY ID
function getClientListById(id) {
	return db("clientList as c").where("c.client_list_id", id);
}
// Get Client list for instructor

// ADD  Client LISTS
async function createClientList(newClass) {
	const brandNewClientList = await db("clientList")
		.insert(newClass)
		.returning("*");
	return brandNewClientList;
}
//UPDATE  Client LISTS BY ID
async function updateClientListByID(clientNClass, id) {
	const updatedClientList = await db("clientList as c")
		.update(clientNClass)
		.where("c.client_list_id", id)
		.returning("*");
	return updatedClientList;
}
//DELETE  Client LISTS BY ID
async function deleteClientListByID(id) {
	const user = await getClientListById(id);
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
	const numberOfClientList = user.length;
	console.log(numberOfClientList);
	if (numberOfClientList === 0) {
		return errorMessage;
	} else {
		await db("clientList as c").where("c.client_list_id", id).del();
		return successMessage;
	}
}

module.exports = {
	getClientLists,
	getClientListById,
	createClientList,
	updateClientListByID,
	deleteClientListByID,
};
