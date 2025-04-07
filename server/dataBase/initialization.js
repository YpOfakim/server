var mysql = require("mysql2");
var path = require("path");
const conDB = require("./connectToDB");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") }); // בדיקת טעינת המשתנים הסביבתיים

    // הכנסת נתונים התחלתיים לטבלת users

    async function initializeDB() {
        // הכנסת נתונים התחלתיים לטבלת users
        const insertUsers = `
        INSERT INTO users (user_id, user_name,user_userName, email) VALUES
        (1, 'Leanne Graham','Bret', 'Sincere@april.biz'),
        (2, 'Ervin Howell',"Antonette", 'Shanna@melissa.tv'),
        (3, 'Clementine Bauch', "Samantha",'Nathan@yesenia.net'),
        (4, 'Patricia Lebsack',"Karianne", 'Julianne.OConner@kory.org'),
        (5, 'Chelsey Dietrich',"Kamren", 'Lucio_Hettinger@annie.ca')
        `;
 
    await conDB.promise().query(insertUsers);
    console.log("Initial apartments inserted");
  
    
  }
  
  initializeDB();
  module.exports = initializeDB;