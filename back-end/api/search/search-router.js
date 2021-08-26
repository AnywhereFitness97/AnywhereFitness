const server = require("express").Router();
const searchModel = require("./search-model");

server.post("/classname", (req, res, next) => {
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
server.post("/date", (req, res, next) => {
	const { searchItem } = req.body;
	searchModel
		.searchDatabaseByClassName(searchItem)
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
server.post("/instructorusername", (req, res, next) => {
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
server.post("/instructorfirstname", (req, res, next) => {
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

server.post("/clientusername", (req, res, next) => {
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
server.post("/clientfirstname", (req, res, next) => {
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
server.post("/time", (req, res, next) => {
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
server.post("/location", (req, res, next) => {
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
server.post("/type", (req, res, next) => {
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
server.post("/IntensityLevel", (req, res, next) => {
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
