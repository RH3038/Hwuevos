express = require('express');
var app = express();

// config for your database
const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER, 
  database: process.env.DATABASE,
  synchronize: true,
  trustServerCertificate: true,
};

app.put('/accounts-page', function (req, res) {

  
});

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log('Server is running on port: ' + port);
});