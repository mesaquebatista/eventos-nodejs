const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    return res.status(200).send({
        titulo: "API de eventos",
        versao: "1.0.0"
    });
});

router.use('/eventos', require('./eventos'));
router.use('/usuarios', require('./usuarios'));

module.exports = router;

