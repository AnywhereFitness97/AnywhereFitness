exports.seed = async function (knex) {
	await knex("clientList").truncate();
	await knex("userInfo").truncate();
	await knex("class").truncate();
};
