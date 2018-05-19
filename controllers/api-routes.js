// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");
var express = require("express");
var mysql = require("mysql");
var app = express();
// =============================================================

// Routes
// =============================================================
module.exports = function(app) {

  // Get all donations
  app.get("/donations", function(req, res) {
    db.donations.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a donation
  app.post("/api/newdonations", function(req, res) {

      // Take the request...
      var donate = req.body;

    console.log("Donations Data:");
    console.log(donate);

   
    Donations.create({
      business: donate.business,
      donorText: donate.donorText,
      quantity_avalaible: donate.quantity_avalaible,
      category: donation.category,
      address: donate.address,
      category: donate.category,
      // food type dropdown select
      // allergens checkbox select
      pickupDate: donate.pickupDate,
      lastCall: donate.lastCall,
      created_at: donate.created_at,
      
    }).then(function(results) {
      // `results` here would be the newly created donations
      res.end();
    });

  });

};