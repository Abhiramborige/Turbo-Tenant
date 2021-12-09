const {con} = require("../database/config");

function read_ownertable(req, res, next) {
  var object=req.body;
  var sql = `SELECT * FROM OwnerTable WHERE email='${object.email}' AND password='${object.password}';`;
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else if(result.length==0){
      res.status(201).send("<div>No user found 🙄! </div>");
    }
    else{
      res.render("home",{user_details: result[0]})
    }
  });
}

function read_tenanttable(req, res, next) {
  var sql = `SELECT * FROM TenantTable WHERE email='${object.email}' AND password='${object.password}';`;
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else if(result.length==0){
      res.status(201).send("<div>No user found 🙄! </div>");
    }
    else{
      res.render("home",{user_details: result[0]})
    }
  });
}

function read_bookingtable(req, res, next) {
  var sql = "SELECT * FROM BookingTable";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function read_housetable(req, res, next) {
  var sql = "SELECT * FROM HouseTable;";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.render("all_houses", {result:result})
    }
  });
}

function read_memberstable(req, res, next) {
  var sql = "SELECT * FROM MembersTable";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

module.exports = {
  read_ownertable,
  read_tenanttable,
  read_bookingtable,
  read_housetable,
  read_memberstable,
};
