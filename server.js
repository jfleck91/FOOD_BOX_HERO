var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "George91",
  database: "foodBoxHero_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM donor;", function(err, data) {
    if (err) throw err;
    res.render("home",  {donations : data});
  });
});

app.get("/donor", function(req, res) {
  connection.query("SELECT * FROM donor;", function(err, data) {
    if (err) throw err;
    res.render("donor",  {donations : data});
  });
});

app.get("/recipient", function(req, res) {
  connection.query("SELECT * FROM donor;", function(err, data) {
    if (err) throw err;
    res.render("recipient",  {donations : data});
  });
});

app.get("/login", function(req, res) {
  connection.query("SELECT * FROM donor;", function(err, data) {
    if (err) throw err;
    res.render("login",  {donations : data});
  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
