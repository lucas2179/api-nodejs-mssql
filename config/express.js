/* Imports */
const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign    = require('consign');
const cors       = require('cors');

module.exports = () => {
    /* Configure express */
    const app = express();
    
    // Setting application variables
    app.set('port', process.env.PORT || config.get('server.port'));
    
    /* Configure body-parser */
    app.use(bodyParser.urlencoded({ extended : true }))

    /* Configure cors */
    app.set('secret', 'api-nodejs');

    // MIDDLEWARES
    app.use(bodyParser.json());
    
    // ENDPOINTS
    consign()
        .include('config/database.js')
        .then('app/routes')
        .then('app/controllers')
        .into(app);
    
    return app;
};