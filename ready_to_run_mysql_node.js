// ready_to_run_mysql_node.js
// Node.js code to connect to your MySQL test_db and users table

const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "node_user",       // your MySQL user
  password: "nodeUserpassword", // replace with the password you set for node_user
  database: "test_db",     // database created in MySQL
});

// Query to fetch rows from the users table
pool.query("SELECT * FROM users LIMIT 10", (err, rows) => {
  if (err) {
    console.log("Error occurred during the connection:", err);
    return;
  }
  console.log("Fetched rows from users table:");
  console.log(rows);

  // Close the pool after query
  pool.end(err => {
    if(err) console.log("Error closing the pool:", err);
    else console.log("Connection pool closed.");
  });
});
