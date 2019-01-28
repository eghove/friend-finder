/* eslint-disable semi */

// DEPENDENCIES
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
// directs to the survey.html
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // directs to home.html
  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // If no matching route is found default to home.html
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
