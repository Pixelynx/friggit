const express = require('express');
const router = express.Router();
const queries = require('../database/queries/userQuery.js');

router.get('/', queries.getAllUsers);
router.post('/', queries.createNewUser);

module.exports = router;
