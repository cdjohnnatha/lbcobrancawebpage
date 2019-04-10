const express = require('express');
const router = express.Router();
const { contact } = require("../../lib/controllers/indexController");

/* GET home page. */
router.post('/contact', contact);

module.exports = router;
