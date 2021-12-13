const sql = require('mssql')

const config = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWS,
  database: process.env.DATABASE_NAME,
  server: process.env.SERVER_NAME,
  "pool": {
      "max": 10,
      "min": 0,
      "idleTimeoutMillis": 30000
  },
  "options": {
      "encrypt": true,
      "trustServerCertificate": false
  },
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};