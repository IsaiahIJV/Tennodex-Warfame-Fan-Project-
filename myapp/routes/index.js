var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "The Home Page" });
});

router.get("/warframe", function(req, res, next) {
  res.render("index", { title: "The Warframe Page" });
});

router.get("/about", function(req, res, next) {
  res.render("about", { title: "The About Page" });
});

module.exports = router;
