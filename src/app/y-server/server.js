const express = require('express');
var user = require('./routes/user');
var account = require('./routes/account');
var stock = require('./routes/stock');
var login = require('./routes/login');
var summary = require('./routes/summary');

const cors = require('cors');
const app = express();

const port = 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', user);

app.use('/', account);

app.use('/', stock);

app.use('/', login);

app.use('/', summary);

var server = app.listen(port, function () {

    console.log('Server is running on port: ' + port);
    
});
