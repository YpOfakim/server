require("dotenv").config();
const express = require("express");


const app = express();


app.use(express.json()); // מאפשר שליחת JSON בבקשות

// נתיבים לדוגמה
app.use("/users", require("./API/usersRoutes"));
app.use("/posts", require("./API/postsRoutes"));
app.use("/todos", require("./API/todosRoutes"));
app.use("/comments", require("./API/commentsRoutes"));

app.get("", (req, res) => {
  return res.status(200).json("maching server");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
