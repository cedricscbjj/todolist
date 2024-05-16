const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config()

const mainController = require('./controllers/maincontroller');

router.use(express.json());


router.get('/', mainController.mainPage);










module.exports = router;

