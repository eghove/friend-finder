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


        // this function takes in the user's score array, and an existing object in friendArray
        function compareFriends(user, oldFriend) {
            // store the comparison total
            let compare = 0;
            //turn the oldfriend's scores into an array numbers, store them
            let oldFriendScores = scoresToNumbers(oldFriend);

            for (let j=0; j < user.length; j++) {

                // calculate the difference between both scores
                let difference = user[j] - oldFriendScores[j];

                // if the difference is negative, get the absolute value and then add it to compare
                if (difference < 0) {
                    difference = -1 * difference;
                    compare += difference;

                // else just add difference to compare
                } else {
                    compare += difference;
                }
            }

            return compare;
        }

        //catch the survey object and store it in variable newFriend
        let newFriend = req.body;

        // create the array where the new friend scores will be stored
        let newFriendScores = scoresToNumbers(newFriend);

        // console.log(compareFriends(newFriendScores, friendArray[0]));

        


        //push the survey data to friendArray--this has to be done near the end
        friendArray.push(newFriend);

        // TO-DO: send back the match
        res.send(true);
    });



} //end of the export
