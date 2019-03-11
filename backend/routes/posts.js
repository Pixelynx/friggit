const express = require('express');
const router = express.Router();
const queries = require('../database/queries/postQuery.js');

router.get('/', queries.getAllPosts);
router.post('/', queries.createNewPost);

module.exports = router;
