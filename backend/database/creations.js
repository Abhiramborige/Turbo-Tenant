import { con } from "./connection";

export function create_ownertable(){
  var sql = `
    CREATE TABLE OwnerTable IF NOT EXISTS (n
      name VARCHAR(50), 
      email VARCHAR(50),
      password VARCHAR(60),
      mobile_num INT(10),
      occupation VARCHAR(20),
      num_houses INT(2),
      country VARCHAR(10),
      state VARCHAR(10),
      city VARCHAR(10),
      address VARCHAR(50)
    );`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("OwnerTable created");
  });
}

export function create_tenanttable(){
  var sql = `
    CREATE TABLE TenantTable IF NOT EXISTS(n
      first_name VARCHAR(255),
      last_name VARCHAR(255), 
      address VARCHAR(255),
      email VARCHAR(50),
      mobile_num INT(10),
      occupation VARCHAR(20)
    );`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("TenantTable created");
  });
}

export function create_bookingtable(){
  var sql = `
    CREATE TABLE BookingTable IF NOT EXISTS(n
      tenant_id VARCHAR(255), 
      house_id VARCHAR(255),
      dooking_date VARCHAR(255),
      peroid VARCHAR(255),
      price INT(10),
      agreement 
      )
    `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("BookingTable created");
  });
}

export function create_housetable(){
  var sql = `
    CREATE TABLE HouseTable IF NOT EXISTS (n
      owner_name VARCHAR(255), 
      No_of_rooms VARCHAR(255),
      rate INT(50),
      Upload_pics 
      country VARCHAR(50),
      state VARCHAR(50),
      city VARCHAR(50),
      address VARCHAR(50)
      Description VARCHAR(255)

      )
    `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("HouseTable created");
  });
}

export function create_memberstable(){
  var sql = `
    CREATE TABLE MembersTable IF NOT EXISTS(n
      Tenant_ID VARCHAR(255), 
      First_name VARCHAR(255),
      Last_name VARCHAR(255),
      occupation VARCHAR(255),
      gender VARCHAR(20),
      date_of_Birth 
      relation_ship_with_tenant VARCHAR(50)
      )
    `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("MembersTable created");
  });
}