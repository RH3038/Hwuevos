const express = require('express')
const config = require('../config/dbconfig.json')
const router = express.Router()
const sql = require("mssql");
const bcrypt = require('bcrypt');

router.use(express.json());

router.get('/', (req, res) => {
    res.send('login');
});

router.post('/login', (req, res) => {
    var hash;
    var user;

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create request object
        var request = new sql.Request();
        
        // add-user page insert user into database.
        request.query(`Select Hash from dbo.Users Where Email='${req.body.email}'`, function (err, result) {
            if (err) console.log(err);
            
            hash = result.recordset[0].Hash;
            
            bcrypt.compare(req.body.password, hash, function(err, result) {
                
                if(result == true) {
                    request.query(`Select * from dbo.Users Where Email='${req.body.email}'`, function (err, result) {
                        user = result;
                        console.log(result.recordset[0]);
                    });
                }
                else {

                }

            });

        });



    });

});

module.exports = router;
 