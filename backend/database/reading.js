const con = require("../database/config");

function read_ownertable(req, res, next) {
  var sql = "SELECT * FROM OwnerTable";
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

function read_tenanttable(req, res, next) {
  var sql = "SELECT * FROM TenantTable";
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
  var sql = "SELECT * FROM HouseTable";
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
