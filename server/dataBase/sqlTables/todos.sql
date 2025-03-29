    
     CREATE TABLE todos (
   todo_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL CHECK ,
    title VARCHAR(20) NOT NULL CHECK (CHAR_LENGTH(title) BETWEEN 3 AND 20),
    completed BOOLEAN CHECK (completed IN (0,1))
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
