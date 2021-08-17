const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    senha: {
        type: String,
        required: true
    }
}, {timestamps: true});

Usuario.pre('save', function(next){
    var usuario = this;
    if (!usuario.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(usuario.password, salt, function(err, hash){
            if(err) return next(err);

            //  Verifica se a criptografia criada e senha realmente são iguais
            usuario.password = hash;
            next();
        });
    });
})

mongoose.model('Usuario', Usuario);