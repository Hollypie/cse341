const mysql = require("mysql2"); // using mysql2 is recommended

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "node_user",       // or 'root' if you prefer, but node_user is safer
  password: "nodeUserpassword", // replace with the password you set
  database: "test_db",     // your database name
  debug: false,
});

pool.query("SELECT * FROM users LIMIT 10", (err, rows) => {
  if (err) {
    console.log("Error occurred during the connection:", err);
    return;
  }
  console.log(rows[0]);
});
