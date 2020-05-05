var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello from Kurts Flower Shop');
  res.render('stephsshop', { title: 'Stephs Shop' });
});

module.exports = router;
