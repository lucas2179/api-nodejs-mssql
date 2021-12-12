const sql = require('mssql')

//Following example:
//const config = 'mssql://database-user:password@server-name/db?encrypt=true&';

const config = {
  server: process.env.SERVER_NAME,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWS,
  port: 1433,
  "connectionTimeout": 300000,
  "requestTimeout": 300000,
  "pool": {
      "max": 300,
      "min": 0,
      "idleTimeoutMillis": 30000
  },
  "options": {
      "encrypt": true,
      "enableArithAbort": true
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