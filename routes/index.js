var express = require('express');
var router = express.Router();

var mongo = require('../api/endpoints/mongo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mongo', function(req, res, next) {
  res.render('index', { title: 'mongo' });
});


module.exports = router;
