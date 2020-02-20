const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const http = require("http");
const path = require("path");

/* 
    MYSQL
    create database testdb; use table testtable;
    user: user - password: password
*/

const mysql = require("mysql");
const db = require("./db");
const dbNoSql = require("./noSqlDb")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb"
});


/* 
    NOSQL
    use testdb; db.testtable.insert({...})
*/

const MongoClient = require('mongodb').MongoClient;                     //MongoDB driver
const url = 'mongodb://localhost/testdb';                               //DB Url to connect

//EXPRESS CONFIGURATION

const app = express();
    app.use(cors())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(db(connection));

//CONNECTION TO DBs

connection.connect(function(err) {                                    //MYSQL
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

MongoClient.connect(url, {                                             //MONGODB
  useUnifiedTopology: true,
  useNewUrlParser: true,
  })
  .then(() => console.log('Connected to the MondoDB server.'))
  .catch(err => {
  console.log("DB Connection Error");
  });


// Declare static folder to be served. It contains the js, images, css, etc.
app.use(express.static("dist/ngServerApp"));

// Serve the index.html for all the other requests so that the
// router in the javascript app can render the necessary components
app.get("*", function(req, res) {
  console.log("REQUEST from WEB ");
  res.sendFile(path.join(__dirname + "/dist/ngServerApp/index.html"));
  //__dirname : It will resolve to your project folder.
});

const port = process.env.PORT || 80;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log("running on port " + port));
