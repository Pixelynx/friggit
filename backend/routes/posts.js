const express = require('express');
const router = express.Router();
const queries = require('../database/queries/postQuery.js');

router.post('/submit', queries.createNewPost);

module.exports = router;
