var mysql = require('mysql2');

var con2 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ofakim123",
    database: "mydb"
  });
  con2.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });
  module.exports = con2;
