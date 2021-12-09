module.exports = app => {
    const cdhustsController = require('../controllers/cdhusts.controller')

    app.route('/cdhusts/:cpf/:conta')
        .get(cdhustsController.getStatus)
}