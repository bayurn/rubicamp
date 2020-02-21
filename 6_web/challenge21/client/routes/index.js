var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CRUD (Create, Read, Update, Delete)' });
});

router.get('/add', (req, res, next) => {
  res.render('add', { titleAdd: 'Add Data' });
});

router.get('/edit/:id', (req, res, next) => {
  res.render('index', { titleEdit: 'Edit Data' });
});

router.put('/edit', (req, res, next) => {
  res.redirect('/');
})

module.exports = router;
