// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var env = require('dotenv').load();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport   = require('passport')
var session    = require('express-session')

//var authRoute = require('./authroutes/auth.js')(app);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));
 // session secret
 // persistent login sessions
app.use(passport.initialize());
 
app.use(passport.session()); 

//Models
var db = require("./models");
 
//Sync Database
db.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

//Handlebars Engine
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers: {
    json: function (context) {
      return JSON.stringify(context);
    }
  }
}));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);
//require("./controllers/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

