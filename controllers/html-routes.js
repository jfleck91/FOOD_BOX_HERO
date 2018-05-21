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


    app.get("/test", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/testHome.html"));
    });
  
  };

  


  
//app.get("/", function(req, res) {
//    connection.query("SELECT * FROM donations;", function(err, data) {
//      if (err) throw err;
//      res.render("home",  {donations : data});
//    });
//  });
//
//  app.get("/donor", function(req, res) {
//    connection.query("SELECT * FROM donations;", function(err, data) {
//      if (err) throw err;
//      res.render("donations",  {donations : data});
//    });
//  }); 
//  app.get("/recipient", function(req, res) {
//    connection.query("SELECT * FROM donations;", function(err, data) {
//      if (err) throw err;
//      res.render("recipients",  {donations : data});
//    });
//  }); 
//  app.get("/login", function(req, res) {
//    connection.query("SELECT * FROM donations;", function(err, data) {
//      if (err) throw err;
//      res.render("login",  {donations : data});
//    });
//  });
//};

