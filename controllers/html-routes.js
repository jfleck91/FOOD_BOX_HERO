//Bringing in required dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var mysql = require("mysql");
var app = express();

// Root get route
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    });

  app.get("/donations", function(req, res) { 
     // res.render("donations");
      res.sendFile(path.join(__dirname, "../public/donations.html"));
      //res.sendFile(path.join(__dirname,"../views.donations.handlebars"));
    });
  
  app.get("/recipient", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipients/.html"));;
    });  

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));;
    });

    app.get("/signup", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/signup.html"));;
      });

    //app.get("/test", function(req, res) {
      //res.sendFile(path.join(__dirname, "../public/testHome.html"));
    //});
  
  
    // app.get("/signup", function(req, res) {
    // res.render("signup");
  };

  




  

