var express = require('express');
var router = express.Router();

/* GET home page. show stripe button */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// /* GET stripe redirect page. */
// router.get('/stripesuccess', function(req, res, next) {
//   res.render('index', { title: 'stripe object' });
// });

module.exports = router;
