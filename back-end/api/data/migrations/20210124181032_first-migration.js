exports.up = async (knex) => {
	await knex.schema
		.createTable("userInfo", (users) => {
			users.increments("userID");
			users.string("first_name", 200).notNullable();
			users.string("last_name", 200).notNullable();
			users.string("email", 200).notNullable();
			users.string("username", 200).notNullable().unique();
			users.string("password", 200).notNullable();
			users.string("role", 12).notNullable();
		})
		.createTable("class", (classes) => {
			classes.increments("classId");
			classes.string("class_name", 200).notNullable();
			classes.string("class_time", 200).notNullable();
			classes.string("class_am_or_pm", 200).notNullable();
			classes.string("class_date", 200).notNullable();
			classes.integer("class_duration").notNullable();
			classes.string("class_type", 200).notNullable();
			classes.string("class_intensity_level", 200).notNullable();
			classes.string("class_location", 200).notNullable();
			classes.increments("class_client_list_id", { primaryKey: false });
			classes.string("class_description", 200).notNullable();
			classes.string("class_instructor_username", 200).notNullable();
			classes.integer("class_cost").notNullable();
		})
		.createTable("clientList", (client) => {
			client.increments("client_list_id");
			client.integer("class_id").notNullable();
			client.integer("usersId").notNullable();
		});
};

exports.down = async (knex) => {
	await knex.schema
		.dropTableIfExists("userInfo")
		.dropTableIfExists("clientList")
		.dropTableIfExists("class");
};
