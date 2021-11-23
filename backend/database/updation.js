import { con } from "./connection";

export function update_ownertable(object, query){
  var sql = "UPDATE OwnerTable SET"
  for (const [key, value] of Object.entries(object)) {
    sql+=`${value} WHERE ${key} =`
  }
  for (const [key, value] of Object.entries(query)) {
    sql+=`${value}`
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

export function update_TenantTable(object, query){
  var sql = "UPDATE TenantTable SET"
  for (const [key, value] of Object.entries(object)) {
    sql+=`${value} WHERE ${key} =`
  }
  for (const [key, value] of Object.entries(query)) {
    sql+=`${value}`
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });


export function update_BookingTable(object, query){
  var sql = "UPDATE BookingTable SET"
  for (const [key, value] of Object.entries(object)) {
    sql+=`${value} WHERE ${key} =`
  }
  for (const [key, value] of Object.entries(query)) {
    sql+=`${value}`
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });


export function update_HouseTable(object, query){
  var sql = "UPDATE HouseTable SET"
  for (const [key, value] of Object.entries(object)) {
    sql+=`${value} WHERE ${key} =`
  }
  for (const [key, value] of Object.entries(query)) {
    sql+=`${value}`
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });


export function update_MembersTable(object, query){
  var sql = "UPDATE MembersTable SET"
  for (const [key, value] of Object.entries(object)) {
    sql+=`${value} WHERE ${key} =`
  }
  for (const [key, value] of Object.entries(query)) {
    sql+=`${value}`
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}


// Please update for all tables these also accordingly