// const con2 = require("../dataBase/connection");


// // יצירת טבלת קורסים עם עמודת teacher_id
// var sqlCourse = `CREATE TABLE IF NOT EXISTS course (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     teacher_id INT,
//     FOREIGN KEY (teacher_id) REFERENCES teacher(id) ON DELETE SET NULL
// )`;
// con2.query(sqlCourse, function (err) {
//     if (err) throw err;
//     console.log("Table 'course' created or already exists");

//     // הכנסת קורסים לדוגמה (כל קורס משויך למורה מסוים)

// });
// var sqlInsertCourse = "INSERT INTO course (name, teacher_id) VALUES ?";
// var courseValues = [['C Programming', 1], ['Java', 2], ['Math', 1], ['Python', 3], ['Yoga', 2]];
// con2.query(sqlInsertCourse, [courseValues], function (err, result) {
//     if (err) throw err;
//     console.log("Inserted courses:", result.affectedRows);
// });
var select="SELECT * FROM course INNER JOIN techer INNER JOIN student"
 con2.query(select,  function (err, result) {
     if (err) throw err;
     console.log( result);
 });