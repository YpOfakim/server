const con2 = require("../dataBase/connection");


// יצירת טבלת תלמידים עם `course_id`
var sqlStudent = `CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE SET NULL
)`;
con2.query(sqlStudent, function (err) {
    if (err) throw err;
    console.log("Table 'student' created or already exists");

    // הכנסת תלמידים עם קורסים מקושרים
  
});  var sqlInsertStudent = "INSERT INTO student (name, course_id) VALUES ?";
    var studentValues = [
        ['AliceStud', 1],  // רשום לקורס 1 (C Programming)
        ['BobStud', 2],    // רשום לקורס 2 (Java)
        ['CharlieStud', 3],// רשום לקורס 3 (Math)
        ['DavidStud', 4],  // רשום לקורס 4 (Python)
        ['EmmaStud', 5]    // רשום לקורס 5 (Yoga)
    ];
    con2.query(sqlInsertStudent, [studentValues], function (err, result) {
        if (err) throw err;
        console.log("Inserted students:", result.affectedRows);
    });
