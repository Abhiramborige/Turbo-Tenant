require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
var bodyParser = require('body-parser')
const path = require('path')
const connect_route = require("./routes/connection");
const crud_routes=require("./routes/CRUD_routes")

app.set("view engine","ejs");
app.set('views', path.join(__dirname ,'../views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, '../public')));

app.use("/", connect_route);
app.use("/database", crud_routes);
// error handler.
app.use(function (err, req, res, next) {
  if(err)
    res.status(500).send('Something went wrong in our side 😕!\n'+JSON.stringify(err, null, 4))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
