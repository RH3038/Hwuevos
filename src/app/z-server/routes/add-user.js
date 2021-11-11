const express = require('express')
const config = require('../config/dbconfig.json')
const router = express.Router()
const sql = require("mssql");
const bcrypt = require('bcrypt');

router.use(express.json());

router.get('/', (req, res) => {
   res.send('user');
});

router.post('/add-user', (req, res) => {
    //console.log(req.body);

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();
        
        bcrypt.hash(req.body.password, 6).then(function(hash) {
            //console.log(hash);

            // add-user page insert user into database.
            request.query(`INSERT INTO dbo.Users(First_Name, Last_Name, Email, Hash, Available_Funds) 
            VALUES('${req.body.first}','${req.body.last}','${req.body.email}', 
                   '${hash}','${req.body.amount}')`, function (err, result) {console.log(err)});
        });

    });

});

router.get('/add-user/data', (req, res) => {
     // connect to your database
     sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();

        // get user information
        request.query(`SELECT * FROM dbo.Users`, function (err, recordset) {

            if (err) console.log(err);
            
            res.send(recordset.recordsets);
        });

    });

});

module.exports = router;