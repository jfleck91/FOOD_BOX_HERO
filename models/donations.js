// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.json");
// Creates a "donations" model that matches up with DB
var Donations = sequelize.define("donations", {
  
  business: Sequelize.STRING,

  foodtype: Sequelize.STRING,
 
  quantity_avalaible: Sequelize.INTEGER,

  address: Sequelize.STRING,
 
  lastCall: Sequelize.DATE,

  donorText: Sequelize.STRING,

  donated_at: Sequelize.DATE,

 
}, {
  timestamps: false
});

// Syncs with DB
Donations.sync();

module.exports = Donations;
// Makes the Donations Model available for other files (will also create a table)
