const express = require('express')
const config = require('../config/dbconfig.json')
const router = express.Router()
const sql = require("mssql");

router.use(express.json());

router.get('/', (req, res) => {
   res.send('Authentication');
});

router.post('/add-auth', (req, res) => {
    console.log(req.body);

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`INSERT INTO dbo.Authentication(Login, Password) 
            VALUES('${req.body.login}', '${req.body.password}')`, function (err, result) {});

    });

});

router.get('/add-auth/data', (req, res) => {
     // connect to your database
     sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // add-account page insert account into database
        request.query(`SELECT * FROM dbo.Authentication`, function (err, recordset) {

            if (err) console.log(err);
            
            res.send(recordset);
        });

    });

});

module.exports = router;