const express = require('express')
const router = express.Router()
const sql = require("mssql");
const bcrypt = require('bcrypt');
const connect = require('../connect');

router.use(express.json());

router.get('/', (req, res) => {

   res.send('user');
   
});

router.post('/user', (req, res) => {

    connect.add_user(req, res);
    
});

module.exports = router;