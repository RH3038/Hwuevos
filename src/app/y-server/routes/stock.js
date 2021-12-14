const express = require('express')
const router = express.Router()
const connect = require('../connect');

router.use(express.json());

router.get('/', (req, res) => {

   res.send('stocks');
   
});

router.post('/stock', (req, res) => {
   
    connect.add_stock(req, res);

});

router.post('/stock/data', (req, res) => {
     
    connect.get_stocks(req, res);

});

router.delete('/stock/delete', (req, res) => {

    connect.delete_stock(req, res);

});

module.exports = router;