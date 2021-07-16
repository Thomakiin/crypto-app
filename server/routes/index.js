var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const app = require('../app'); // original
//const app = require('express')(); // mine

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
