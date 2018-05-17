//Bringing in required dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

//Getting main home profile page "http://server/profile"
router.get("/", function(req, res) {
  res.render("home");
});

router.get("/recipient", function(req, res) {
    res.render("recipient");
  });

router.get("/donor", function(req, res) {
    res.render("donor");
  });

router.get("/login", function(req, res) {
    res.render("login");
  });
module.exports = router;