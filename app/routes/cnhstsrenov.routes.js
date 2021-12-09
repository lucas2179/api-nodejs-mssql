module.exports = app => {
    const cnhstsrenovController = require('../controllers/cnhstsrenov.controller')

    app.route('/cnhstsrenov/:cpf')
        .get(cnhstsrenovController.readByCpf)
}