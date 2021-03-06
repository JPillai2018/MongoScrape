// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
// Requiring our Note and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use body parser with our app
app.use(bodyParser.urlencoded({
   extended: false
}));

// Make public a static dir
//app.use(express.static(process.cwd() + "/public"));
app.use(express.static("public"));
// Database configuration with mongoose
var MONGODB_URI= process.env.MONGODB_URI || 'mongodb://localhost/mongoScrape';
  
//var MONGODB_URI= process.env.MONGODB_URI || "mongodb://jpillaiGT2008:Password12345@ds159772.mlab.com:59772/mongoscrape";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection sucessful.");
});

//set engine and default for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = express.Router();

// Require routes file pass router object
//require("./config/routes")(router);
require("./controllers/routes")(router);

// Have every request go through router middlewar
app.use(router);

//set port
var port = process.env.PORT || 3000;

//setup listener
app.listen(port, function() {
  console.log("app running on port " + port);
});
