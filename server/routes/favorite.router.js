const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlQuery = `SELECT * FROM "favorite"`;
  pool.query(sqlQuery) 
  .then((result)=>{
    res.send(result.rows);
  }).catch((err)=>{
    console.log('error getting GET', err)
    res.sendStatus(500);
  })
});
// add a new favorite
router.post('/', (req, res) => {
  const gif = req.body;
  console.log('in /api/favorite POST', req.body);
  const queryText = `INSERT INTO "favorite" ("fav_id")
  VALUES ($1);
  `;

  const queryValues = [
    gif.gif
  ];
  
  pool.query(queryText, queryValues)
  .then(()=> { res.sendStatus(200); })
  .catch((err) => {
    console.log('error posting gif to database', err);
    res.sendStatus(500);
  })

  res.sendStatus(200);
});




// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
