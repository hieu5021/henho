const express = require('express');
const Router = express.Router();
const siteController = require('../app/controllers/siteController');

//newsController.index
Router.get('/',siteController.home);

module.exports =Router;