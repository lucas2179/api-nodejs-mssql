const CNH_BOLETO = require('../models/cnhboleto.model')

exports.getBoleto = async(req, res) => {
    const cnh_boleto = await CNH_BOLETO.getBoleto(req.params.cpf, req.params.data, req.params.valor)

    if(cnh_boleto.length){
        res.status(200).send(cnh_boleto)
    } else {
        res.status(500).send({message: 'Not found.'})
    }
}