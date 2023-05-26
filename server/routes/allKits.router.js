const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//! SELECT all kit columns PLUS the first photo (list of kits)
//SELECT *, (SELECT "url" FROM "photos" WHERE "kit_id" = k.id ORDER BY "order" LIMIT 1) as "photo"  FROM "kit" as k;
//? what I had before for query in GET `SELECT * FROM kit ORDER BY "order" ASC`
//TODO change photo to URL later
//! Get 
router.get('/', (req, res) => {
  const query = `SELECT *, (SELECT "url" FROM "photos" WHERE "kit_id" = k.id ORDER BY "order" ASC LIMIT 1) as "photo"  FROM "kit" as k;`;
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
router.get('/editInformation', (req, res) => {
  const kitId = req.query.id
  const queryText = `SELECT * FROM kits WHERE kit_id=$1`;
  pool.query(queryText, [kitId]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('ERROR in getting selected kit on router', error)
  })
});

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });


//! PUT TO UPDATE 
router.put('/edit', (req, res) => {
  console.log('In PUT request');
  let updatedKit = req.body;
  // Query to update kit
  // "name", "description", "backstory", "url", "order"
  // only included values I want to change
  let updateQuery = `UPDATE "kit" 
        SET "name" = $1, "description" = $2, "backstory" = $3, "photo" = $4, "order" = $5
        WHERE "id" = $6;`;
  pool.query(updateQuery,
    [updatedKit.name,
    updatedKit.description,
    updatedKit.backstory,
    updatedKit.photo,
    updatedKit.order,
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
  console.log('In DELETE request');
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
