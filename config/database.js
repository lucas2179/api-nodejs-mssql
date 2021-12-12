const sql = require('mssql')

//Following example:
//const config = 'mssql://database-user:password@server-name/db?encrypt=true&';

const config = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWS,
  server: process.env.SERVER_NAME,
  database: process.env.DATABASE_NAME,
  //requestTimeout: 180000, // for timeout setting
  //connectionTimeout: 180000, // for timeout setting
  port: 1433,
  pool:{
    idleTimeoutMillis: 60000
  },
  requestTimeout : 60000,
    "options": {
      //"enableArithAbort": true,
      //"port": 1433
    }
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