const CNH_STS_RENOV = require('../models/cnhstsrenov.model')

exports.readByCpf = async(req, res) => {
    const cnh_sts_renov = await CNH_STS_RENOV.readByCpf(req.params.cpf)

    if(cnh_sts_renov.length){
        res.status(200).send(cnh_sts_renov)
    } else {
        res.status(500).send({message: 'Not found.'})
    }
}