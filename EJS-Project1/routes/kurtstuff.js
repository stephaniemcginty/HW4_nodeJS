var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello from Kurts Flower Shop');
  res.render('kurtsflowershop', { title: 'Kurts Flower Shop' });
});

module.exports = router;
