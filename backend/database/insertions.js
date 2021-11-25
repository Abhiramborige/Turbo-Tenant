const con = require("../database/config");

function insert_into_ownertable(req, res, next, object) {
  // var object=req.heaaders['data'];
  console.log(req.headers)
  var sql = "INSERT INTO OwnerTable VALUES ?";
  var values = [
    [
      object.name,
      object.email,
      object.password,
      object.mobile_num,
      object.occupation,
      object.num_houses,
      object.country,
      object.state,
      object.city,
      object.address,
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

function insert_into_tenanttable(req, res, next, object) {
  var sql = "INSERT INTO TenantTable VALUES ?";
  var values = [
    [
      object.first_name,
      object.last_name,
      object.email,
      object.password,
      object.mobile_num,
      object.occupation,
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

function insert_into_bookingtable(req, res, next, object) {
  var sql = "INSERT INTO BookingTable VALUES ?";
  var values = [
    [
      object.tenant_id,
      object.house_id,
      object.booking_date,
      object.peroid,
      object.price,
      object.agreement,
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

function insert_into_housetable(req, res, next, object) {
  var sql = "INSERT INTO HouseTable VALUES ?";
  var values = [
    [
      object.owner_id,
      object.no_of_rooms,
      object.rate,
      object.upload_pics,
      object.country,
      object.state,
      object.city,
      object.address,
      object.description,
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      console.log("Number of records inserted: " + result.affectedRows);
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
    }
  });
}

function insert_into_memberstable(req, res, next, object) {
  var sql = "INSERT INTO MembersTable VALUES ?";
  var values = [
    [
      object.tenant_id,
      object.first_name,
      object.last_name,
      object.occupation,
      object.gender,
      object.date_of_birth,
      object.relationship_with_tenant,
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err.message);
      next(err);
    }
    else{
      res.status(200).send("Response received 🥳!<br>" + JSON.stringify(result, null, 4));
      console.log("Number of records inserted: " + result.affectedRows);
    }
  });
}

module.exports = {
  insert_into_ownertable,
  insert_into_tenanttable,
  insert_into_bookingtable,
  insert_into_bookingtable,
  insert_into_memberstable,
};
