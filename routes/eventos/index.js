const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.json({
        action: true,
        titulo: "Titulo"
    }, 200);
});

router.get('/:id', function(req, res){
    res.json({
        action: true,
        titulo: "Titulo " + req.params.id 
    }, 200);
});

module.exports = router;