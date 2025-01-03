const db = require("../db");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide name, email and password" });
  }
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    await db.query(
      `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${encryptedPassword}')`
    );

    const userDetails = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    return res.status(201).json(userDetails[0][0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  try {
    const user = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
    console.log(user);
    if (user.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const validPassword = await bcrypt.compare(password, user[0][0].password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.status(200).json(user[0][0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, loginUser };
