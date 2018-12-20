// LOAD DATA
let friendArray = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // for the GET request for the API raw data
    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    //for the POST request to add survey data to friendArray, also the camparison logic
    app.post("/api/friends", function (req, res) {

        // turn newFriends.scores from an array of strings to an array of numbers
        function scoresToNumbers(param) {
            let array = [];
            for (let i = 0; i < param.scores.length; i++) {
                let temp = parseInt(param.scores[i]);
                array.push(temp);
            }
            return array;
        };

        //catch the survey object and store it in variable newFriend
        let newFriend = req.body;

        // create the array where the new friend scores will be stored
        let newFriendScores = scoresToNumbers(newFriend);


        //push the survey data to friendArray
        friendArray.push(newFriend);

        // TO-DO: send back the match
        res.send(true);
    });



} //end of the export
