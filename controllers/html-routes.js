//Bringing in required dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var mysql = require("mysql");
var app = express();

// Root get route
module.exports = function(app) {

  app.get("/", function(req, res) {
      res.render("home");
    });

  app.get("/donor", function(req, res) { 
      res.render("donations");
    });
  
  app.get("/recipient", function(req, res) {
      res.render("recipients");
    });  

  app.get("/login", function(req, res) {
      res.render("login");
    });
  };

  


  

