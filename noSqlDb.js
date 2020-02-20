var MongoClient = require('mongodb').MongoClient;
const express = require("express");

function createRouter() {

  const app = express();
  var url = 'mongodb://localhost/testdb';
  var str = "";

  app.route('/testdb').get(function(req, res)

    {
      MongoClient.connect(url, function(err, db) {
        var collection = db.collection('Employee');
        var cursor = collection.find({});
        str = "";
        cursor.forEach(function(item) {
            if (item != null) {
                    str = str + "    Employee id  " + item.id + "    Employee name  " + item.name + "</br>";
                }
            });
            res.send(str);
            //db.close();
        });
    });
}

module.exports = createRouter;