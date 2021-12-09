const CNH_RENOV = require('../models/cnhrenov.model')

exports.create = async(req, res) => {
    var protocolo = Math.floor(Math.random() * 90000) + 10000;
    
    const cnh_renov = await CNH_RENOV.create(req.body, protocolo)

    if(cnh_renov){
        res.status(200).send({message: 'Ok!', Protocolo: protocolo})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const cnh_renov = await CNH_RENOV.read();
    res.status(200).send(cnh_renov)
}

exports.readByCpf = async(req, res) => {
    const cnh_renov = await CNH_RENOV.readByCpf(req.params.cpf)

    if(cnh_renov.length){
        res.status(200).send(cnh_renov)
    } else {
        res.status(500).send({message: 'Not found.'})
    }
}