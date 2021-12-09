const CDHU_STS = require('../models/cdhusts.model')

exports.getStatus = async(req, res) => {
    const cdhusts = await CDHU_STS.getStatus(req.params.cpf, req.params.conta)

    if(cdhusts.length){
        res.status(200).send(cdhusts)
    } else {
        res.status(500).send({message: 'Not found.'})
    }
}