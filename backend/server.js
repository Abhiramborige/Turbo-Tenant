require("dotenv").config();
var mysql = require("mysql");
const express = require("express");
const app = express();
const port = process.env.PORT;

const connect_route = require("./routes/connection");
const crud_routes=require("./routes/CRUD_routes")


app.use("/", connect_route);
app.use("/database", crud_routes);
app.use(function (err, req, res, next) {
  if(err)
    res.status(500).send('Something went wrong in our side 😕!\n'+JSON.stringify(err, null, 4))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
