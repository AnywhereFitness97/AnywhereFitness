const knex = require('knex')
const configs = require('../../knexfile.js')
const { NODE_ENV } = require("../../config/config");

module.exports = knex(configs[NODE_ENV])
// module.exports = knex(configs[process.env.NODE_ENV])
