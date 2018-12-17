const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM projects';
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
  const newProject = req.body;
  const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website_url", "github_url", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const queryValues = [
    newProject.name,
    newProject.description,
    newProject.thumbnail,
    newProject.website_url,
    newProject.github_url,
    newProject.date_completed,
    newProject.tag_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
