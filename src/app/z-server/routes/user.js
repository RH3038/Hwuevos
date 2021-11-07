const express = require('express')
const config = require('../config/dbconfig.json')
const router = express.Router()
const sql = require("mssql");

router.use(express.json());

router.get('/', (req, res) => {
   res.send('user');
});

router.postt('/add-user', (req, res) => {
    console.log(req.body);

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`INSERT INTO dbo.User(First_Name, Last_Name, Email, Available_Funds) 
            VALUES('${req.body.first}', '${req.body.last}', 
                '${req.body.email}', '${req.body.amount}')`, function (err, result) {});

    });

});

router.get('/add-user/data', (req, res) => {
     // connect to your database
     sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`SELECT * FROM dbo.User`, function (err, recordset) {

            if (err) console.log(err);
            
            res.send(recordset);
        });

    });

});

module.exports = router;