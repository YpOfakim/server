async function getAllUsers() {
    // console.log(`in get all apartments services`);
    const [rows] = await db.query("SELECT * FROM users");
    // console.log(`all apartments rows: ${rows}`);
    return rows;
  }
  async function getUserById(id) {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE user_id = ?",
      [id]
    );
    return rows[0];
  }
  async function createUser(user) {
    const [result] = await db.query("INSERT INTO users SET ?", user);
    return { id: result.insertId, ...user };
  }
  async function deleteUser(id) {
    await db.query("DELETE FROM users WHERE user_id = ?", [id]);
  }
  async function updateUser(id, user) {
    await db.query("UPDATE users SET ? WHERE id = ?", [user, id]);
    return { id, ...user };
  }
