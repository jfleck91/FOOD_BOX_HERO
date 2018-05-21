//******************************************************************
// Dependencies
// =============================================================

var express = require("express");
var router = express.Router();
//var path = require("path");
//var mysql = require("mysql");
var app = express();

var db = require("../models");


module.exports = function(app) {

 // Routes
// =============================================================
 // Get all Donations
 app.get("/api/all/:id?", function(req, res) {
  if (req.params.id) {
    // Then display the JSON for ONLY that donation.
    
    db.donations.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      return res.json(result);
    });
  }
  else {
  
    // Otherwise display the data for all of the donations.
    
    db.donations.findAll({}).then(function(result) {
      return res.json(result);
    });
  }


  });

 // Add a donation/api/adddonation
  app.get("/api/addnew", function(req, res) {
    var d = req.body;
    console.log("Donation:");
    console.log(d);
    db.donations.create({
    
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
 




 /////////////////////////////
 
  // DELETE route for deleting donation. We can get the id of the donation to be deleted from
  // req.params.id
  app.get("/api/:id/delete", function(req, res) {
    // We just have to specify which donation we want to destroy with "where"
    db.donations.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });

  });



    // PUT route for updating donation
    app.get("/api/:id/update", function(req, res) {

      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      var d = req.body;
      db.donations.update({
        
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
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(db) {
        res.json(db);
      })
        .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
          res.json(err);
        });
    });

};

