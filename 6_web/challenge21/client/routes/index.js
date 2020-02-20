var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CRUD (Create, Read, Update, Delete)' });
});

router.get('/add', (req, res, next) => {
  res.render('add', { title: 'Add Data' });
});

router.get('/edit/:id', (req, res, next) => {
  res.render('edit', { title: 'Edit Data' });
});

module.exports = router;
