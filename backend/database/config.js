require("dotenv").config();
const PASSWORD = process.env.PASSWORD;
const mysql = require("mysql");

var start_con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: PASSWORD,
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: PASSWORD,
  database: "Turbotenant"
});

module.exports={start_con,con};