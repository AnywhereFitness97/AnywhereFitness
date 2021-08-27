exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("clientList")
		.del()
		.then(function () {
			return knex("clientList").insert([
				{
					class_id: 1,
					usersId: 1,
				},
			]);
		});
};
