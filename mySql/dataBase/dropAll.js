const con2 = require("../dataBase/connection");

var sql = "DROP TABLE course";
con2.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
});

sql = "DROP TABLE student";
con2.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
});
sql = "DROP TABLE teacher"; 
con2.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
});