module.exports = app => {
    const cnhboletoController = require('../controllers/cnhboleto.controller')

    app.route('/cnhboleto/:cpf')
        .get(cnhboletoController.getBoleto)
}