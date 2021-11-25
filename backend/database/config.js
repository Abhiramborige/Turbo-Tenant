require("dotenv").config();
const PASSWORD = process.env.PASSWORD;
const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: PASSWORD,
  database: "Turbotenant"
});

module.exports=con;