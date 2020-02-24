const express = require("express");
const MongoClient = require("mongodb").MongoClient;

function createRouter() {
  const router = express.Router();

  router.get("/collection", function(req, res, next) {
    var MongoClient = require("mongodb").MongoClient;

    const url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;

      var dbo = db.db("testdb");

      dbo = dbo
        .collection("testtable")
        .find({})
        .toArray(function(err, result) {
          if (err) {
            console.log(err);
            res.status(500).json({ status: "error" });
          } else {
            res.status(200).json(result);
          }
        });
    });
  });

  return router;
}

module.exports = createRouter;
