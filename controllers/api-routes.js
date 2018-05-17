// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies

// =============================================================
var db = require("../models/");
// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/", function(req, res) {
    db.Donations.findAll({}).then(function(results) {
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

      category: donation.foodtype,

      quantity_avalaible: donate.quantity_avalaible,

      lastCall: donate.lastCall,

      address: donate.address,

      donorText: donate.donorText,

      donated_at: donate.donated_at,
      
    }).then(function(results) {
      // `results` here would be the newly created donations
      res.end();
    });

  });

};