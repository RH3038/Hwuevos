const express = require('express')
const config = require('../config/dbconfig.json')
const router = express.Router()
const sql = require("mssql");

router.use(express.json());

router.get('/', (req, res) => {
   res.send('stocks');
});

router.post('/add-stock', (req, res) => {
    console.log(req.body);

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(
            `INSERT INTO dbo.Stock(Account_Name, Stock_Name, Shares,
                Price, Date, Average, Total) VALUES(
                '${req.body.account}', '${req.body.stock}', 
                '${req.body.shares}', '${req.body.price}',
                '${req.body.date}', '${req.body.average}',
                '${req.body.total}')`, function (err, result) {}
        );

    });

});

router.get('/add-stock/data', (req, res) => {
     // connect to your database
     sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`SELECT * FROM dbo.Stock`, function (err, recordset) {

            if (err) console.log(err);
            
            res.send(recordset);
        });

    });

});

module.exports = router;