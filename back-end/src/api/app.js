const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const usersRoutes = require('../database/routes/users/usersRoutes');

app.use('/cadastro-usuario', usersRoutes);

module.exports = app;
