const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM tags';
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const queryText = `INSERT INTO tags ("name") VALUES ($1);`;
  pool.query(queryText, [req.body.tag])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
