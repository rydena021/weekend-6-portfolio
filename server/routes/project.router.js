const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `SELECT "projects".id, "projects".name, "projects".description, "projects".date_completed,
    "projects".github_url, "projects".website_url, "projects".thumbnail, "tags".name AS "tag_name"
    FROM "projects" LEFT OUTER JOIN "tags" ON "tags"."id" = "projects"."tag_id"
    ORDER BY "projects"."id" ASC;`;
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
                    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
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

router.delete('/:id', (req, res) => {
  let sqlText = `DELETE FROM "projects" WHERE "id"=$1;`;
  pool.query(sqlText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('ERROR deleting in DB:', err);
      res.sendStatus(500)
    })
});

module.exports = router;
