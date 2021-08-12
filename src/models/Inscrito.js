const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Inscrito = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    eventos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Evento'
        }
    ]
}, {timestamps: true})

mongoose.model('Inscrito');