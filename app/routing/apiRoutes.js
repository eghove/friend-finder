// LOAD DATA
let friendArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
    // for the get request for the API raw data
    app.get("/api/friends", function(req, res){
        res.json(friendArray);
    });



} //end of the export
