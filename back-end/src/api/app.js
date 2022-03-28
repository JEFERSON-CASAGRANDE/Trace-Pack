const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const loginRouters = require('../database/routes/users/loginRouters');
const usersRoutes = require('../database/routes/users/usersRoutes');
const pointRouters = require('../database/routes/features/pointRoutes');

app.use('/login', loginRouters);
app.use('/cadastro-usuario', usersRoutes);
app.use('/cadastro-ponto', pointRouters);

module.exports = app;
