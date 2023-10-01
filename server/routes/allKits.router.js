const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//! Get all kits and photos
router.get('/', (req, res) => {
  const query = `SELECT *, (SELECT "url" FROM "photos" WHERE "kit_id" = k.id ORDER BY "order" ASC LIMIT 1) as "photo"  FROM "kit" as k ORDER BY "id" DESC;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all kits', error);
      res.sendStatus(500)
    })
});

//! GET a selected kit
router.get('/selected/:id', (req, res) => {
  const kitId = req.params.id
  const queryText = `
  SELECT kit.*, photos.id AS photo_id, photos.url
  FROM "kit"
  LEFT JOIN "photos" ON kit.id = photos.kit_id
  WHERE kit.id = $1;`
  pool.query(queryText, [kitId]).then((result) => {
    console.log(result.rows)
    res.send(result.rows);
  }).catch((error) => {
    console.log('ERROR in getting selected kit on router', error)
    res.sendStatus(500)
  })
});

//TODO need to manipulate the 1 to set the order 
//! ADD a new kit
router.post('/', (req, res) => {
  const insertKitQuery = `INSERT INTO "kit"
  ("name", "description", "backstory", "user_id", "order") 
  VALUES ($1, $2, $3, ${req.user.id}, 1) RETURNING "id";`

  pool.query(insertKitQuery, [req.body.kitName, req.body.description, req.body.backstory])
    .then(() => {
    }).catch(error => {
      console.log('Error in post on kits router', error);
      res.sendStatus(500)
    })
});

//! PUT TO UPDATE 
router.put('/edit', (req, res) => {
  let updatedKit = req.body;
  // Query to update kit 
  let updateQuery = `UPDATE "kit" 
        SET "name" = $1, "description" = $2, "backstory" = $3, "order" = $4
        WHERE "id" = $5;`;
  pool.query(updateQuery,
    [updatedKit.name,
    updatedKit.description,
    updatedKit.backstory,
    updatedKit.order,
    updatedKit.id
    ])
  let updateQuery2 = `UPDATE "photos" 
    SET "url" = $1 WHERE "id" = $2;`;
  pool.query(updateQuery2,
    [updatedKit.photo,
    updatedKit.id
    ])
    .then(() => { })
    .catch((error) => {
      console.log('Error in PUT on allKits.router', error);
      res.sendStatus(500);
    })
});

//! DELETE
router.delete('/:id', (req, res) => {
  let deletedKit = req.params.id;
  // Query to delete a specific kit based on id
  let deleteKitQuery = `DELETE FROM "kit" WHERE "id" = $1;`
  pool.query(deleteKitQuery, [deletedKit])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in DELETE on allKits.router', error)
      res.sendStatus(500);
    })
});

module.exports = router;