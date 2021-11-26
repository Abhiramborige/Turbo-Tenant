const {con} = require("../database/config");

function update_ownertable(req, res, next, object, query) {
  var sql = "UPDATE OwnerTable SET";
  for (const [key, value] of Object.entries(object)) {
    sql += `${value} WHERE ${key} =`;
  }
  for (const [key, value] of Object.entries(query)) {
    sql += `${value}`;
  }
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log(result.affectedRows + " record(s) updated");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function update_tenanttable(req, res, next, object, query) {
  var sql = "UPDATE TenantTable SET";
  for (const [key, value] of Object.entries(object)) {
    sql += `${value} WHERE ${key} =`;
  }
  for (const [key, value] of Object.entries(query)) {
    sql += `${value}`;
  }
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log(result.affectedRows + " record(s) updated");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function update_bookingtable(req, res, next, object, query) {
  var sql = "UPDATE BookingTable SET";
  for (const [key, value] of Object.entries(object)) {
    sql += `${value} WHERE ${key} =`;
  }
  for (const [key, value] of Object.entries(query)) {
    sql += `${value}`;
  }
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log(result.affectedRows + " record(s) updated");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function update_housetable(req, res, next,object, query) {
  var sql = "UPDATE HouseTable SET";
  for (const [key, value] of Object.entries(object)) {
    sql += `${value} WHERE ${key} =`;
  }
  for (const [key, value] of Object.entries(query)) {
    sql += `${value}`;
  }
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log(result.affectedRows + " record(s) updated");
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function update_memberstable(req, res, next, object, query) {
  var sql = "UPDATE MembersTable SET";
  for (const [key, value] of Object.entries(object)) {
    sql += `${value} WHERE ${key} =`;
  }
  for (const [key, value] of Object.entries(query)) {
    sql += `${value}`;
  }
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log(result.affectedRows + " record(s) updated");
    }
  });
}

module.exports = {
  update_ownertable,
  update_tenanttable,
  update_bookingtable,
  update_housetable,
  update_memberstable,
};
