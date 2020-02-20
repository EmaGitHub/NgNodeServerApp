var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/testdb';
var str = "";

const express = require("express");
const app = express();

app.route('/testdb').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('testtable').find();
            //noinspection JSDeprecatedSymbols
            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    Employee id  " + item.id + "    Employee name  " + item.name + "</br>";
                }
            });
            res.send(str);
            db.close();
        });
    });
