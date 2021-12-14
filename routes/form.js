var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form', { title: 'Create a post' });
});

module.exports = router;
