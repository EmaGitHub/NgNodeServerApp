const express = require("express");
const bodyParser = require("body-parser");

function createRouter(db) {

  /* const app = express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true
    })) */
  const router = express.Router();

  router.post("/add", (req, res, next) => {

    db.query(
      "INSERT INTO testtable (name) VALUES (?)",
      [req.body.data],
      error => {
        if (error) {
          console.error(error);
          res.status(500).json({ status: "error" });
        } else {
          res.status(200).json({ status: "ok" });
        }
      }
    );
  });

  router.delete("/delete/:id", function(req, res, next) {
    db.query(
      "DELETE FROM testtable WHERE id=?",
      [req.params.id],
      error => {
        if (error) {
          res.status(500).json({ status: "error" });
        } else {
          res.status(200).json({ status: "ok" });
        }
      }
    );
  });

  router.get("/test", function(req, res, next) {

    db.query(
      "SELECT * FROM testtable",
      //[owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error" });
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  /* router.put('/event/:id', function (req, res, next) {
    db.query(
      'UPDATE events SET name=?, description=?, date=? WHERE id=? AND owner=?',
      [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  }); */

  return router;
}
module.exports = createRouter;
