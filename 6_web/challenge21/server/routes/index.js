var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = (pool) => {
  router.get('/', (req, res, next) => {
    let querySql = `SELECT * FROM data`;

    // pagination
    const limit = 4;
    const currentPage = parseInt(req.query.page) || 1;
    const offset = parseInt(currentPage - 1) * limit;

    // filtering
    let data = req.query
    let result = [];
    let forDate = {};

    console.log(data);
    
    if (data.checkId === 'on') {
      result.push(`id=${data.inputId}`);
    }
    if (data.checkString === 'on') {
      result.push(`string='${data.inputString}'`);
    }
    if (data.checkInteger === 'on') {
      result.push(`id=${data.inputInteger}`);
    }
    if (data.checkFloat === 'on') {
      result.push(`float=${data.inputFloat}`);
    }
    if (data.checkBoolean === 'on') {
      result.push(`boolean=${data.inputBoolean === 'true' ? '1' : '0'}`);
    }
    if (data.checkDate === 'on') {
      forDate.startDate = data.startDate;
      forDate.endDate = data.endDate;
    }

    if (result.length > 0) {
      querySql = querySql + ' WHERE ';
      if (result.length > 1) {
        for (let i = 0; i < result.length; i++) {
          querySql = querySql + result[i] + ' AND ';
        }
        querySql = querySql.slice(-(Math.abs(querySql.length)), -4);
      } else {
        for (let i = 0; i < result.length; i++) {
          querySql = querySql + result[i] + ' ';
        }
      }
    }

    if (forDate.hasOwnProperty('startDate')) {
      if (querySql === 'SELECT * FROM data') {
        querySql = `SELECT * FROM data WHERE date BETWEEN '${forDate.startDate}' AND '${forDate.endDate}'`;
      } else {
        querySql = querySql + `AND date BETWEEN '${forDate.startDate}' AND '${forDate.endDate}'`;
      }
    }
    querySql = querySql + ' ORDER BY id asc';
    console.log(result);
    
    console.log(querySql);
    
    // end filter

    pool.query(querySql, (err, data) => {
      // let result = data.rows;
      if (err) res.status(500).send(err);

      const totalRows = data.rows.length === undefined ? 0 : data.rows.length;
      const totalPage = Math.ceil(totalRows / limit)
      const url = req.url == '/' ? '/?page=1' : req.url;

      querySql += ` limit ${limit} offset ${offset}`;
      console.log(querySql);

      pool.query(querySql, (err, data) => {
        if (err) res.status(500).send(err);
        let result = data.rows.map(item => {
          return item
        })
        res.status(200).json({
          result,
          url,
          offset,
          totalPage,
          currentPage,
          query: req.query
        })
      })
    })
  });

  router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const querySql = `SELECT * FROM data WHERE id = ${id}`;
    // console.log(querySql);
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

    pool.query(queryEdit, (err, data) => {
      if (err) res.status(500).send(err);
      res.status(201).json({
        string: string,
        integer: integer,
        float: float,
        date: date,
        boolean: boolean ? 'true' : 'false'
      })
    })
  });

  router.post('/', (req, res, next) => {
    const { string, integer, float, date, boolean } = req.body;
    const queryAdd = `INSERT INTO data (string, integer, float, date, boolean)
    VALUES ('${string}', ${integer}, ${float}, '${date}', '${boolean}')`;

    pool.query(queryAdd, (err, data) => {
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