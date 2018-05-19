// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================

 var express = require("express");
 var router = express.Router();
 //var path = require("path");
 //var mysql = require("mysql");
 var app = express();

var api = require("../models");

// Root get route
module.exports = function(app) {

  // Routes
// =============================================================
  // Get all chirps
  app.get("/api/all", function(req, res) {
    // Finding all DOnations, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    api.donations.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });
  // Add a donation/api/newdonation
   app.get("/api/newdonation", function(req, res) {
     var d = req.body;
     console.log("Donation:");
     console.log(d);
     api.donations.create({
     
       business:d.business,
       food:d.food,
       quantity_avalaible:d.quantity_avalaible,
       address:d.address,
       lastCall:d.lastCall,
       pickupDate:d.lastCall,
       donorText:d.donorText,
       created_at:d.created_at,
       updated_at:d.updated_at,
       category:d.category,
       allergen:d.allergen
       ///////
     }).then(function(results) {
       // `results` here would be the newly created Donor
       res.end();
     });
   });
  };


