const express = require('express');
var add_user = require('./routes/add-user');
var add_account = require('./routes/add-account');
var add_stock = require('./routes/add-stock');
var get_login = require('./routes/login');
const cors = require('cors');
const app = express();

const port = 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', add_user);

app.use('/', add_account);

app.use('/', add_stock);

app.use('/', get_login);

var server = app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});
