const Person = require('../models/person.model')

exports.create = async(req, res) => {
    const person = await Person.create(req.body)

    if(person){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const person = await Person.read();
    res.status(200).send(person)
}

exports.update = async(req, res) => {
    const person = await Person.update(req.params.id, req.body)

    if(person){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const person = await Person.delete(req.params.id, req.body);

    if (person) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}

exports.readById = async(req, res) => {
    const person = await Person.readById(req.params.id)
    
    function randomError() {
        return Math.floor(Math.random() * 3);
    }

    var error = randomError();
    console.log(`Error: ${error}`)

    if ( error == 0 ) {
        console.log(`condition is zero: ${error}`)
        res.status(500).send({ message: 'Error.' });
        
    } else {
        console.log(`condition is not zero: ${error}`)
        res.status(200).send(person);
    }
}