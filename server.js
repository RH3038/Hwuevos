express = require('express');

var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    const config = {
      user: 'RH3038',
      password: 'Rh653038@$',
      server: 'MrHam92', 
      database: 'Hwuevos',
      synchronize: true,
      trustServerCertificate: true,
    };

    var connect = new sql.ConnectionPool();

  
});

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log('Server is running on port: ' + port);
});