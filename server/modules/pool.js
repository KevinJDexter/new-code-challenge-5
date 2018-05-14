const Pool = require('pg').Pool;

const config = {
  host: 'localhost',
  port: 5432,
  database: 'message_board',
  max: 10,
  idleMillisTimeout: 30000
}

const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('connected to postgresql database');
})

pool.on('error', (error, client) => {
  console.log('error connectiong to postgresql database');
  process.exit(-1);
})

module.exports = pool;