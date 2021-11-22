import { con } from "./connection";

export function insert_into_ownertable(object){
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
      object.address
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}


// Please update for all tables these also accordingly

var sql = "INSERT INTO TenantTable VALUES ?";
var values = [
  ['John', 'Highway 71'],
];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

var sql = "INSERT INTO BookingTable VALUES ?";
var values = [
  ['John', 'Highway 71'],
];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

var sql = "INSERT INTO HouseTable VALUES ?";
var values = [
  ['John', 'Highway 71'],
];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

var sql = "INSERT INTO MembersTable VALUES ?";
var values = [
  ['John', 'Highway 71'],
];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});