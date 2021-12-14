const express = require('express');
const router = express.Router();
const connect = require('../connect');

router.use(express.json());

router.get('/', (req, res) => {

    res.send('account');

});

router.post('/account', (req, res) => {

    connect.add_account(req, res);

});

router.post('/account/data', (req, res) => {

    connect.get_accounts(req, res);

});

router.delete('/account/delete', (req, res) => {

    connect.delete_account(req, res);

})

module.exports = router;