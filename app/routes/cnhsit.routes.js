module.exports = app => {
    const cnhsitController = require('../controllers/cnhsit.controller')

    app.route('/cnhsit')
        .get(cnhsitController.read)

    app.route('/cnhsit/:cpf/:cnh_nro')
        .get(cnhsitController.readByCpfandCnhNro)
}