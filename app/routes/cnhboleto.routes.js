module.exports = app => {
    const cnhboletoController = require('../controllers/cnhboleto.controller')

    app.route('/cnhboleto/:cpf/:data/:valor')
        .get(cnhboletoController.getBoleto)
}