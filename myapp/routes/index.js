var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

// Warframe page route.
router.get("/warframe", function(req, res) {
  res.render("warframe");
});

// About page route.
router.get("/about", function(req, res) {
  res.render("about");
});

module.exports = router;
