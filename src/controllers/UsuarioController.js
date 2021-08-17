const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports = {
    async index (req, res) {
        let usuarios = await Usuario.find();
        res.json(usuarios);
    },

    async store(req, res){
        let data = req.body;
        let usuario = await Usuario.create(data);
        res.json({usuario}, 201)
    }
}