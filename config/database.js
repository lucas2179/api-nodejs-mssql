const sql = require('mssql')

//'mssql://username:password@localhost/database'
//Following example:
const config = 'mssql://admin.camara:Welcome1@mvpdb.database.windows.net/db?encrypt=true';

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