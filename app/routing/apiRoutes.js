// LOAD DATA
let friendArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
    // for the GET request for the API raw data
    app.get("/api/friends", function(req, res){
        res.json(friendArray);
    });

    //for the POST request to add survey data to friendArray, also the camparison logic
    app.post("/api/friends", function(req, res) {
        //push the survey data to friendArray
        friendArray.push(req.body);
        res.send(true);
    });



} //end of the export
