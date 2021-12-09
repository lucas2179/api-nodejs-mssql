module.exports = app => {
    const cnhstsprocController = require('../controllers/cnhstsproc.controller')

    app.route('/cnhstsproc')
        .get(cnhstsprocController.read)

    app.route('/cnhstsproc/:cpf/:cnh_nro')
        .get(cnhstsprocController.readByCpfandCnhNro)
}