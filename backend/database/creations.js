var con = require("../database/config");
const remove_line_break = require("../utility/utility");

function create_ownertable(req, res, next) {
  var sql = `
    CREATE TABLE IF NOT EXISTS OwnerTable (
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
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      next(err);
    } else {
      console.log("OwnerTable created");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function create_tenanttable(req, res, next) {
  var sql = `
    CREATE TABLE IF NOT EXISTS TenantTable(
      first_name VARCHAR(255),
      last_name VARCHAR(255), 
      address VARCHAR(255),
      email VARCHAR(50),
      mobile_num INT(10),
      occupation VARCHAR(20)
    );`;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log("TenantTable created");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 40));
    }
  });
}

function create_bookingtable(req, res, next) {
  var sql = `
    CREATE TABLE IF NOT EXISTS BookingTable(
      tenant_id VARCHAR(255), 
      house_id VARCHAR(255),
      dooking_date VARCHAR(255),
      peroid VARCHAR(255),
      price INT(10),
      agreement LONGBLOB
      );
    `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log("BookingTable created");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function create_housetable(req, res, next) {
  var sql = `
    CREATE TABLE IF NOT EXISTS HouseTable (
      owner_name VARCHAR(255), 
      No_of_rooms VARCHAR(255),
      rate INT(50),
      image LONGBLOB,
      country VARCHAR(50),
      state VARCHAR(50),
      city VARCHAR(50),
      address VARCHAR(50),
      description VARCHAR(255)
      );
    `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log("HouseTable created");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function create_memberstable(req, res, next) {
  var sql = `
    CREATE TABLE IF NOT EXISTS MembersTable(
      tenant_ID VARCHAR(255), 
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      occupation VARCHAR(255),
      gender VARCHAR(20),
      date_of_Birth VARCHAR(20),
      relation_ship_with_tenant VARCHAR(50)
      );
    `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("MembersTable created");
    }
  });
}

module.exports = {
  create_ownertable,
  create_tenanttable,
  create_bookingtable,
  create_housetable,
  create_memberstable,
};
