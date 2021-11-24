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


export function insert_into_tenanttable(object){
  var sql = "INSERT INTO TenantTable VALUES ?";
  var values = [
    [
      object.first_name, 
      object.last_name,
      object.email,
      object.password,
      object.mobile_num,
      object.occupation
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}

export function insert_into_bookingtable(object){
  var sql = "INSERT INTO BookingTable VALUES ?";
  var values = [
      [
      object.tenant_id, 
      object.house_id,
      object.booking_date,
      object.peroid,
      object.price,
      object.agreement
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}

export function insert_into_housetable(object){
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
        object.description
      ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}

export function insert_into_memberstable(object){
  var sql = "INSERT INTO MembersTable VALUES ?";
  var values = [
    [
        object.tenant_id, 
        object.first_name,
        object.last_name,
        object.occupation,
        object.gender,
        object.date_of_birth,
        object.relationship_with_tenant
      ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
}