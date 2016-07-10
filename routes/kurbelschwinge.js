var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  var queryObject = url.parse(req.url, true).query;

  var a = isNaN(+queryObject.a) ? 80 : +queryObject.a;
  var b = isNaN(+queryObject.b) ? 200 : +queryObject.b;
  var c = isNaN(+queryObject.c) ? 100 : +queryObject.c;
  var d = isNaN(+queryObject.d) ? 200 : +queryObject.d;
  var e = isNaN(+queryObject.e) ? 0 : +queryObject.e;

  // d is d if e=0, else d=d2 (kurbelschwinge.ejs)
  var queryArray = [a, b, c, Math.sqrt(d*d + e*e)];

  //sort array from smallest to largest number
  queryArray.sort(function(a, b) {
      return a - b;
  });

  console.log('queryArray: ' + queryArray);
  var umlauffaehig = (queryArray[3]+queryArray[0] <= queryArray[1]+queryArray[2]);
  console.log('Umlauffaehig: ' + umlauffaehig);

  if (umlauffaehig) {
      res.render('kurbelschwinge',
                 {title: 'Kurbelschwinge',
                  a: a, // use predefined value if converted query-string is NaN or missing
                  b: b,  // redundant if grashof is checked
                  c: c,
                  d: d,
                  e: e
                 });
  } else {
      res.send('Der Mechanismus ist mit diesen Parametern nicht umlauffähig!')
  }
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