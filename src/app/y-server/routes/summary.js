const express = require('express');
const router = express.Router();
const connect = require('../connect');

router.use(express.json());

router.get('/', (req, res) => {

    res.send('summary');
    
});

router.post('/summary/data', (req, res) => {

    connect.get_summary(req, res);

});

module.exports = router;