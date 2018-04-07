const environment = 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)
const conn = connection

module.exports = {
   listCities
}