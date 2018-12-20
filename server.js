// Dependencies
// =============================================================
let express = require("express");




// Sets up the Express App
// =============================================================
let app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTING
// =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });