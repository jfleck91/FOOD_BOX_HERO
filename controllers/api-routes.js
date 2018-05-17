// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Donations = require("../models/donations.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/alldonations", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Donations.findAll({}).then(function(results) {
      // results are available to us inside the .then
      return res.json(results);
    });

  });

  // Add a donation
  app.post("/api/newdonations", function(req, res) {

      // Take the request...
      var donaton = req.body;

    console.log("Donations Data:");
    console.log(donation);

   
    Donations.create({
      business: donation.business,

      foodtype: donation.foodtype,

      quantity_avalaible: donation.quantity_avalaible,

      lastCall: donation.lastCall,

      address: donation.address,

      donorText: donation.donorText,

      donated_at: donation.donated_at,
      
    }).then(function(results) {
      // `results` here would be the newly created donations
      res.end();
    });

  });

};