const sql = require('mssql')

//'mssql://username:password@localhost/database'
//Following example:
//const config = 'mssql://admin.camara:Welcome1@mvpdb.database.windows.net/db?encrypt=true&';

const config = {
  user: 'admin.camara',
  password: 'Welcome1',
  server: 'mvpdb.database.windows.net',
  database: 'db',
  requestTimeout: 180000, // for timeout setting
  connectionTimeout: 180000, // for timeout setting
    "options": {
      "encrypt": true, // need to stop ssl checking in case of local db
      "enableArithAbort": true
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