const db = require("../data/db-config");

async function searchDatabaseByClassName(searchItem) {
	const SearchResult = await db("class").where(
		db.raw('LOWER("class_name")'),
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByDate(searchItem) {
	const SearchResult = await db("class").where(
		"class_date",
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByInstructorUsername(searchItem) {
	const SearchResult = await db("class").where(
		db.raw('LOWER("class_instructor_username")'),
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByTime(searchItem) {
	const SearchResult = await db("class").where(
		"class_time",
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByLocation(searchItem) {
	const SearchResult = await db("class").where(
		db.raw('LOWER("class_location")'),
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByType(searchItem) {
	const SearchResult = await db("class").where(
		db.raw('LOWER("class_type")'),
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByIntensityLevel(searchItem) {
	const SearchResult = await db("class").where(
		db.raw('LOWER("class_intensity_level")'),
		"like",
		`%${searchItem}%`
	);
	return SearchResult;
}
async function searchDatabaseByInstructorFirstname(searchItem) {
	const SearchResult = await db("userInfo").where(
		db.raw('LOWER("first_name")'),
		"like",
		`%${searchItem}%`
	);
	console.log(SearchResult);
	const FullName = SearchResult[0].first_name + " " + SearchResult[0].last_name;
	const Email = SearchResult[0].email;
	const Username = SearchResult[0].username;
	const Role = SearchResult[0].role;
	if (Role === "Instructor") {
		const dataToSend = { FullName, Email, Username, Role };
		return dataToSend;
	} else {
		return null;
	}
}
async function searchDatabaseByClientUsername(searchItem) {
	const SearchResult = await db("userInfo").where(
		db.raw('LOWER("username")'),
		"like",
		`%${searchItem}%`
	);
	console.log(SearchResult);
	const FullName = SearchResult[0].first_name + " " + SearchResult[0].last_name;
	const Email = SearchResult[0].email;
	const Username = SearchResult[0].username;
	const Role = SearchResult[0].role;
	if (Role === "Client") {
		const dataToSend = { FullName, Email, Username, Role };
		return dataToSend;
	} else {
		return null;
	}
}
async function searchDatabaseByClientFirstname(searchItem) {
	const SearchResult = await db("userInfo").where(
		db.raw('LOWER("first_name")'),
		"like",
		`%${searchItem}%`
	);

	if (
		SearchResult === "[]" ||
		SearchResult === undefined ||
		SearchResult === []
	) {
		return [];
	} else {
		const SearchCount = SearchResult.length;
		const Role = SearchResult[0].role;

		if (SearchResult === undefined) {
			console.log("fix me later");
		} else if (SearchCount === 0) {
			return null;
		} else if (Role === undefined) {
			return null;
		} else if (Role === "Client") {
			const FullName =
				SearchResult[0].first_name + " " + SearchResult[0].last_name;
			const Email = SearchResult[0].email;
			const Username = SearchResult[0].username;
			const dataToSend = { FullName, Email, Username, Role };
			return dataToSend;
		}
	}
}
module.exports = {
	searchDatabaseByClientFirstname,
	searchDatabaseByClientUsername,
	searchDatabaseByClassName,
	searchDatabaseByDate,
	searchDatabaseByInstructorUsername,
	searchDatabaseByTime,
	searchDatabaseByLocation,
	searchDatabaseByInstructorFirstname,
	searchDatabaseByType,
	searchDatabaseByIntensityLevel,
};
