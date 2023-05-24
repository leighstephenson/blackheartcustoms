const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//! Get 
router.get('/', (req, res) => {
  const query = `SELECT * FROM kit ORDER BY "order" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all kits', err);
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
        SET "name" = $1, "description" = $2, "backstory" = $3, "url" = $4, "order" = $5
        WHERE "id" = $6;`;
  pool.query(updateQuery,
    [updatedKit.name,
    updatedKit.description,
    updatedKit.backstory,
    updatedKit.url,
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
  //TODO make sure this is correct as "kit" not "kits"
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
