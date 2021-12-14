const express = require('express');
const router = express.Router();
const connect = require('../connect');

router.use(express.json());

router.get('/', (req, res) => {

    res.send('login');

});

router.post('/login', (req, res) => {

    connect.auth(req, res);
    
});


module.exports = router;
 