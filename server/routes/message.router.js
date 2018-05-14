const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "messages"`)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('error in GET /messages:', error);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  const message = req.body;
  pool.query(`
    INSERT INTO "messages" ("name", "message")
    VALUES ($1, $2)
  `, [message.name, message.message])
    .then(() => {
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log('error in POST /messages:', error);
      res.sendStatus(500);
    })
})

module.exports = router;