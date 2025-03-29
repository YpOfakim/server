const con2 = require("../dataBase/connection");
var sqlTeacher = `CREATE TABLE IF NOT EXISTS teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
)`;
con2.query(sqlTeacher, function (err) {
    if (err) throw err;
    console.log("Table 'teacher' created or already exists");

   
}); var sqlInsertTeacher = "INSERT INTO teacher (name) VALUES ?";
    var teacherValues = [['Alice'], ['Bob'], ['Charlie']];
    con2.query(sqlInsertTeacher, [teacherValues], function (err, result) {
        if (err) throw err;
        console.log("Inserted teachers:", result.affectedRows);
    });