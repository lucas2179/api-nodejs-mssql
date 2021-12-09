const CNH_SIT = require('../models/cnhsit.model')

exports.read = async(req, res) => {
    const cnh_sit = await CNH_SIT.read();
    res.status(200).send(cnh_sit)
}

exports.readByCpfandCnhNro = async(req, res) => {
    const cnh_sit = await CNH_SIT.readByCpfandCnhNro(req.params.cpf, req.params.cnh_nro)

    if(cnh_sit.length){
        res.status(200).send(cnh_sit)
    } else {
        res.status(500).send({message: 'Not found.'})
    }
}