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
  var object=req.body;
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
      result[0].name=result[0].first_name+" "+result[0].last_name;
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
      res.render("allhouses", {result:result})
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
      res.render("members", {result:result})
    }
  });
}

function read_alltenants(req, res, next) {
  var sql = "SELECT * FROM TenantTable";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.render("tenants", {result:result})
    }
  });
}

function read_allowners(req, res, next) {
  var sql = "SELECT * FROM OwnerTable";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.render("owners", {result:result})
    }
  });
}

function read_allbookings(req, res, next) {
  var sql = "SELECT * FROM BookingTable";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.render("allbookings", {result:result})
    }
  });
}

function read_ratingtable(req, res, next) {
  var sql = "SELECT * FROM RatingTable";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.render("allrating", {result:result})
    }
  });
}

module.exports = {
  read_ownertable,
  read_tenanttable,
  read_bookingtable,
  read_housetable,
  read_memberstable,
  read_ratingtable,
  read_alltenants,
  read_allowners,
  read_allbookings
};
