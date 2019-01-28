/* eslint-disable semi */
// LOAD DATA
var friendArray = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // for the GET request for the API raw data
  app.get('/api/friends', function (req, res) {
    res.json(friendArray);
  });

  // for the POST request to add survey data to friendArray, also the camparison logic
  app.post('/api/friends', function (req, res) {
    // turn newFriends.scores from an array of strings to an array of numbers
    function scoresToNumbers (param) {
      var array = [];
      for (var i = 0; i < param.scores.length; i++) {
        var temp = parseInt(param.scores[i]);
        array.push(temp);
      }
      return array;
    };

    // this function takes in the user's score array, and an existing object in friendArray
    function compareFriends (user, oldFriend) {
      // store the comparison total
      var compare = 0;
      // turn the oldfriend's scores into an array numbers, store them
      var oldFriendScores = scoresToNumbers(oldFriend);

      for (var j = 0; j < user.length; j++) {
        // calculate the difference between both scores
        var difference = user[j] - oldFriendScores[j];

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

    // function that compares all items in friendArray with the user
    function compareAllFriends () {
      // declare a place where the best score may live
      var bestScore = 51;

      // create a place to store the best match as they're found
      var topFriend = {
        name: 'Default',
        photo: 'Default'
      }

      // loop through each object in friendArray and compare
      for (var k = 0; k < friendArray.length; k++) {
        // calls compareFriends between the user's scores and k item in friendArray
        var temp = compareFriends(newFriendScores, friendArray[k]);
        if (temp < bestScore) {
          // store name and photo of topFriend
          topFriend.name = friendArray[k].name;
          topFriend.photo = friendArray[k].photo;
          // reset bestScore to the best match total so far
          bestScore = temp;
        }
      }
      return (topFriend);
    }

    // catch the survey object and store it in variable newFriend
    var newFriend = req.body;

    // create the array where the new friend scores will be stored
    var newFriendScores = scoresToNumbers(newFriend);

    // call compareAllFriends, store the match in a variable called newBestFriend
    var newBestFriend = compareAllFriends();

    // push the user's data to friendArray--this has to be done near the end
    friendArray.push(newFriend);

    // send back the match
    res.send(newBestFriend);
  });
} // end of the export
