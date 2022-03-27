const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const usersRoutes = require('../database/routes/users/usersRoutes');
const loginRouters = require('../database/routes/users/loginRouters');

app.use('/cadastro-usuario', usersRoutes);
app.use('/login', loginRouters);

module.exports = app;
