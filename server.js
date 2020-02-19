const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const http = require("http");
const path = require("path");

/* 
    MYSQL
    create database testdb;
    user: user - password: password
*/

const mysql = require("mysql");
const db = require("./db");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb"
});

connection.connect(function(err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

//EXECUTION

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(db(connection));

// Declare static folder to be served. It contains the js, images, css, etc.
app.use(express.static("dist/ngServerApp"));

// Serve the index.html for all the other requests so that the
// router in the javascript app can render the necessary components
app.get("*", function(req, res) {
  console.log("REQ ");
  res.sendFile(path.join(__dirname + "/dist/ngServerApp/index.html"));
  //__dirname : It will resolve to your project folder.
});

const port = process.env.PORT || 80;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log("running on port " + port));
