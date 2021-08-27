const bcryptjs = require("bcryptjs");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	const hash = bcryptjs.hashSync('password', 10);
	return knex("userInfo")
		.del()
		.then(function () {
			return knex("userInfo").insert([
				{
					first_name: "Timothy",
					last_name: "Jackreece",
					email: "tjackreece@gmail.com",
					username: "tjackreece",
					password: hash,
					role: "Instructor",
				},
				{
					first_name: "Carlotta",
					last_name: "Jackreece",
					email: "cjackreece@gmail.com",
					username: "cjackreece",
					password: hash,
					role: "Instructor",
				},
			]);
		});
};
