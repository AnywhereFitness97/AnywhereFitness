const server = require("express").Router();
const searchModel = require("./search-model");
const {	
	makeSureTheyAreAClient,
	validationSearchableItemField,
} = require("./search-middleware");


server.post("/classname", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;

	searchModel
		.searchDatabaseByClassName(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Name ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/date", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByDate(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Date ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/instructorusername", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByInstructorUsername(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by username ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/instructorfirstname", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByInstructorFirstname(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Name ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});

server.post("/clientusername", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByClientUsername(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by username ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/clientfirstname", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByClientFirstname(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (
				searchResultCount === 0 ||
				searchResult === null ||
				searchResult === "[]" ||
				searchResult === undefined
			) {
				res
					.status(202)
					.json({ message: `No items found by username ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
			// console.log(searchResult);
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/time", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByTime(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Name ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/location", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByLocation(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Name ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/type", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByIntensityLevel(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Name ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
server.post("/IntensityLevel", makeSureTheyAreAClient, validationSearchableItemField, (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByClassName(searchItem)
		.then((searchResult) => {
			const searchResultCount = searchResult.length;
			if (searchResultCount === 0) {
				res
					.status(202)
					.json({ message: `No items found by Name ${searchItem}` });
			} else {
				res.status(200).json({
					message: `Found ${searchItem}`,
					SearchResult: searchResult,
				});
			}
		})
		.catch((error) => {
			next(error);
		});
});
module.exports = server;
