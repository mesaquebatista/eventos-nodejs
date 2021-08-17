const express = require('express');
const router = express.Router();

const usuarioController = require('../../src/controllers/UsuarioController');
router.get('/', usuarioController.index);
router.post('/', usuarioController.store);

module.exports = router;