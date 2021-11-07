const express = require('express')
const config = require('../config/dbconfig.json')
const router = express.Router()
const sql = require("mssql");

router.use(express.json());

router.get('/', (req, res) => {
   res.send('add-account');
});

router.post('/add-account', (req, res) => {
    console.log(req.body);

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`INSERT INTO dbo.Account(Account_Name, Funds_Available) 
            VALUES('${req.body.name}', '${req.body.funds}')`, function (err, result) {});

    });

});

router.get('/add-account/data', (req, res) => {
     // connect to your database
     sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`SELECT * FROM dbo.Account`, function (err, recordset) {

            if (err) console.log(err);
            
            res.send(recordset);
        });

    });

});

module.exports = router;