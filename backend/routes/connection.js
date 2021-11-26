const {start_con} = require("../database/config");
const router = require("express").Router();

let status_connected=0;
start_con.connect(function (err) {
  if (err) {
    status_connected=0
    console.log(err.message);
  } else {
    status_connected=1;
    console.log("Connected!");
  }
});

const connect = (req, res) => {
  if(status_connected==0){
    res.status(500).send(`
      Unable to connect to database 😕<br>
    `);
  }
  else{
    start_con.query(
      "CREATE DATABASE IF NOT EXISTS TurboTenant;",
      function (err, result) {
        if (err) {
          console.log(err.message);
          res.status(500).send(`
                  Unable to connect to database 😕<br>
                  ${err}
                `);
        } else {
          console.log("Database created");
          start_con.query("use TurboTenant;", function (err) {
            if (err) {
              res.status(500).send(`
                    Unable to connect to database 😕<br>
                    ${err}
                  `);
            } else {
              console.log("Selected database to use.");
              res.status(200).send(`
                    Hello from API 🎁, get started with other routes on backend side!<br>
                    Database connected ! ✨<br>
                    Routes in the backend for handling the frontend:
                    <ul>
                      <li>'/update/:tablename' ➡ Used to update a specific table based on parameter</li>
                      <li>'/insert/:tablename' ➡ Used to insert into a specific table based on parameter</li>
                      <li>'/read/:tablename' ➡ Used to read a specific table based on parameter</li>
                    </ul>
                  `);
            }
          });
        }
      }
    );
  }
};

router.get("/", connect);
module.exports = router;
