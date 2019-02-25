const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/friggit_db')

module.exports = { db };
