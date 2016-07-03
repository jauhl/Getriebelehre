var express = require('express');
var url =  require('url');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var queryObject = url.parse(req.url, true).query;
  res.send('Query Variablen lauten: ' + 'a = ' + queryObject.a + ' und b = ' + queryObject.b);
});

module.exports = router;
