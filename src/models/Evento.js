const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Evento = new Schema({
    nome: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true    
    },
    dataEvento: {
        type: Date,
        required: true
    },
    inscritos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Inscrito'
        }
    ]
}, {timestamps: true});

mongoose.model('Evento', Evento);