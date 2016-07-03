var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  var queryObject = url.parse(req.url, true).query;
  res.render('seilmec', { h0: isNaN(+queryObject.h)?200:queryObject.h, // use predefined value if converted query-string is NaN or missing
                          title: 'Seilmechanismus'
  });
});

module.exports = router;


/*backup
* router.get('/', function(req, res, next) {
*   var queryObject = url.parse(req.url, true).query;
*   res.render('Seilmec', { h0: queryObject.h===undefined?200:queryObject.h });
*
*   // getter gehen, sind aber hier nicht nötig
*   get h0() { return isNaN(+queryObject.h)?200:queryObject.h; }, // use predefined value if converted query-string is NaN or missing
*
* });
* */