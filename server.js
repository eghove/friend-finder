// Dependencies
// =============================================================
let express = require("express");
let path = require("path");



// Sets up the Express App
// =============================================================
let app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// variable for the data storage
let friendUserData =[];








// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });