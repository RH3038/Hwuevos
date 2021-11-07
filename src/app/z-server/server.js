const express = require('express');
var add_account = require('./routes/add-account');
const cors = require('cors');
const app = express();

const port = 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', auth);

app.use('/', user);

app.use('/', add_account);

app.use('/', stock);

var server = app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});
