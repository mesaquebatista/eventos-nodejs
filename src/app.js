const express = require('express');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

requireDir('./models/');
app.use('/', require('../routes/api'));
// requireDir('./models/*');

module.exports = app;