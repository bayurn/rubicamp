var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = (pool) => {
  router.get('/', (req, res, next) => {
    const querySql = `SELECT * FROM data`;
    pool.query(querySql, (err, data) => {
      let result = data.rows;
      // console.log(data);
      if (err) res.status(500).send(err);
      res.status(200).json({
        result
      })
    })
  });

  router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const querySql = `SELECT * FROM data WHERE id = ${id}`;
    console.log(querySql);
    pool.query(querySql, (err, data) => {
      let result = data.rows;
      if (err) res.status(500).send(err);
      res.status(200).json({
        result
      })
    })
  });

  router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const { string, integer, float, date, boolean } = req.body;
    const queryEdit = `UPDATE data SET string = '${string}', integer = ${integer}, float = ${float}, date = '${date}', boolean = '${boolean}' WHERE id = ${id}`;
    console.log(queryEdit);
    
    pool.query(queryEdit, (err, data) => {
      if (err) res.status(500).send(err);
      res.status(201).json({
        string: string,
        integer: integer,
        float: float,
        date: date,
        boolean: boolean
      })
    })
  });

  router.post('/', (req, res, next) => {
    const { string, integer, float, date, boolean } = req.body;
    const queryAdd = `INSERT INTO data (string, integer, float, date, boolean)
    VALUES ('${string}', ${integer}, ${float}, '${date}', '${boolean}')`;
    pool.query(queryAdd, (err,data) => {
      if (err) res.status(500).send(err);
      res.status(201).json({
        string: string,
        integer: integer,
        float: float,
        date: date,
        boolean: boolean
      })
    })
  });

  router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const queryDel = `DELETE FROM data WHERE id = ${id}`;
    pool.query(queryDel, (err, data) => {
      if (err) res.status(500).send(err);
      res.status(201).json({
        id: id
      })
    })
  });
  return router;
}