import { con } from "./connection";


export function read_ownertable(){
  var sql="SELECT * FROM OwnerTable";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}

export function read_TenantTable(){
  var sql="SELECT * FROM TenantTable";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}

export function read_BookingTable(){
  var sql="SELECT * FROM BookingTable";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}


export function read_HouseTable(){
  var sql="SELECT * FROM HouseTable";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}

export function read_MembersTable(){
  var sql="SELECT * FROM MembersTable";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}
