var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CRUD (Create, Read, Update, Delete)',
  });
});

// ADD
router.get('/add', (req, res, next) => {
  res.render('add', {
    title: 'CRUD (Create, Read, Update, Delete)',
    titleAdd: 'Add Data'
  });
});

// EDIT
router.put('/edit/:id', (req, res, next) => {
  res.render('index');
});

module.exports = router;
