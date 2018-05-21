//Bringing in required dependencies
//var express = require("express");
//var router = express.Router();
var path = require("path");
//var mysql = require("mysql");
//var app = express();

// Root get route
module.exports = function(app) {

  app.get("/", function(req, res) {
      res.render("home");
    });

  app.get("/donor", function(req, res) { 
      //res.render("donations");
      res.sendFile(path.join(__dirname, "../views/test.html"));
      //res.sendFile(path.join(__dirname,"../public/views.donations.handlebars"));
    });
  
  app.get("/recipient", function(req, res) {
      res.render("recipients");
    });  

  app.get("/login", function(req, res) {
      res.render("login");
    });
  };

  


  

