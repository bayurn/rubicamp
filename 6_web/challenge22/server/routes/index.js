var express = require('express');
var router = express.Router();
const dataController = require('../controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/api', dataController.getData)
router.get('/api/:id', dataController.getOne)
router.post('/api', dataController.addData)
router.put('/api/:id', dataController.updateData)
router.delete('/api/:id', dataController.deleteData)

module.exports = router;
