import { con } from "./connection";


export function read_ownertable(){
  var sql="SELECT * FROM OwnerTable";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}


// Please update for all tables these also accordingly