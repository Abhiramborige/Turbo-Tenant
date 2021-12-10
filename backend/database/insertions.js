const { con } = require("../database/config");
const remove_line_break = require("../utility/utility");

function insert_into_ownertable(req, res, next) {
  var object = req.body;
  var sql = `
  INSERT INTO OwnerTable VALUES(
    '${object.name}',
    '${object.email}',
    '${object.password}',
    '${object.mobile_num}',
    '${object.occupation}',
    '${object.num_houses}',
    '${object.country}',
    '${object.state}',
    '${object.city}',
    '${object.address}'
  );
  `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      res
        .status(200)
        .send(
          "<div>" +
            "Response received 🥳!<br>" +
            JSON.stringify(result, null, 4) +
            "<br>" +
            "Number of records inserted: " +
            result.affectedRows +
            "<br>" +
            "Go to <a href='http://127.0.0.1:5500/static/ownersignin.html'>Signin Page</a>." +
            "</div>"
        );
    }
  });
}

function insert_into_tenanttable(req, res, next) {
  var object = req.body;
  var sql = `
  INSERT INTO TenantTable VALUES(
    '${object.first_name}',
    '${object.last_name}',
    '${object.email}',
    '${object.password}',
    '${object.mobile_num}',
    '${object.occupation}'
  );
  `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      res
        .status(200)
        .send(
          "<div>" +
            "Response received 🥳!<br>" +
            JSON.stringify(result, null, 4) +
            "<br>" +
            "Number of records inserted: " +
            result.affectedRows +
            "<br>" +
            "Go to <a href='http://127.0.0.1:5500/static/tenantsignin.html'>Signin Page</a>." +
            "</div>"
        );
    }
  });
}

function insert_into_bookingtable(req, res, next) {
  var object = req.body;
  var sql = `
  INSERT INTO BookingTable VALUES(
    '${object.tenant_id}',
    '${object.house_id}',
    '${object.booking_date}',
    '${object.peroid}',
    '${object.price}',
    '${object.agreement}'
  );
  `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      res
        .status(200)
        .send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

function insert_into_housetable(req, res, next) {
  console.log(req);
  var object = req.body;
  var sql = `
  INSERT INTO HouseTable VALUES(
    '${object.owner_name}',
    '${object.no_of_rooms}',
    '${object.rate}',
    '${object.image}',
    '${object.country}',
    '${object.state}',
    '${object.city}',
    '${object.address}',
    '${object.description}'
  );
  `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      console.log("Number of records inserted: " + result.affectedRows);
      res
        .status(200)
        .send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function insert_into_memberstable(req, res, next) {
  var object = req.body;
  var sql = `
  INSERT INTO MembersTable VALUES(
    '${object.tenant_id}',
    '${object.first_name}',
    '${object.last_name}',
    '${object.occupation}',
    '${object.gender}',
    '${object.date_of_birth}',
    '${object.relationship_with_tenant}'
  );
  `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      res
        .status(200)
        .send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

function insert_into_ratingtable(req, res, next) {
  var object = req.body;
  var sql = `
  INSERT INTO RatingTable VALUES(
    '${object.tenant_id}',
    '${object.house_id}',
    '${object.rating}',
    '${object.comment}'
  );
  `;
  sql = remove_line_break(sql);
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      res
        .status(200)
        .send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

module.exports = {
  insert_into_ownertable,
  insert_into_tenanttable,
  insert_into_housetable,
  insert_into_bookingtable,
  insert_into_memberstable,
  insert_into_ratingtable
};
