import { con } from "./connection";

export function create_ownertable(){
  var sql = `
    CREATE TABLE OwnerTable IF NOT EXISTS (n
      name VARCHAR(50), 
      email VARCHAR(50),
      password VARCHAR(60),
      mobile_num INT(10),
      occupation VARCHAR(20),
      num_houses INT(2),
      country VARCHAR(10),
      state VARCHAR(10),
      city VARCHAR(10),
      address VARCHAR(50)
    );`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("OwnerTable created");
  });
}


// Please update for all tables these also accordingly

var sql = `
  CREATE TABLE TenantTable IF NOT EXISTS(n
    name VARCHAR(255), 
    address VARCHAR(255))
  `;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("TenantTable created");
});

var sql = `
  CREATE TABLE BookingTable IF NOT EXISTS(n
    name VARCHAR(255), 
    address VARCHAR(255))
  `;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("BookingTable created");
});

var sql = `
  CREATE TABLE HouseTable IF NOT EXISTS (n
    name VARCHAR(255), 
    address VARCHAR(255))
  `;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("HouseTable created");
});

var sql = `
  CREATE TABLE MembersTable IF NOT EXISTS(n
    name VARCHAR(255), 
    address VARCHAR(255))
  `;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("MembersTable created");
});