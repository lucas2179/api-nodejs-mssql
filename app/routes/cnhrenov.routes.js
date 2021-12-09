module.exports = app => {
    const cnhrenovController = require('../controllers/cnhrenov.controller')

    app.route('/cnhrenov')
        .post(cnhrenovController.create)
        .get(cnhrenovController.read)

    app.route('/cnhrenov/:cpf')
        .get(cnhrenovController.readByCpf)
}