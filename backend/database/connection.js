require('dotenv').config()
var mysql = require("mysql");
const PASSWORD = process.env.PASSWORD;

var con = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: PASSWORD,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query(
  "CREATE DATABASE IF NOT EXISTS House_Rental_Magagement;",
  function (err, result) {
    if (err) throw err;
    console.log("Database created");
  }
);
con.end()

