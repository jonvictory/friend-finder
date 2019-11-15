// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
  };

  // parsing survey results
  var currUser = req.body;
  var userScores = currUser.scores;
  // obtaining user submitted info, processing, posting
  var userName = currUser.name;
  var userPhoto = currUser.photo;

  // holder variable for checking user scores against each other
  var totalDifference = 0;

  //loop through the friends array to get each friend's scores
  for (var i = 0; i < friends.length - 1; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      //loop through individual scores then, the user's score to calculate the absolute difference and push to the total difference variable 
      for (var j = 0; j < 10; j++) {
          // calculate the difference between the scores, then sum them into the totalDifference
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
          // handle if the sum of differences is less then the differences of the current "best match"
          if (totalDifference <= bestMatch.friendDifference) {

              // Reset the bestMatch to be the new friend. 
              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.friendDifference = totalDifference;
          }
      }
  }

  // The push method for saving user's data to the database
  friends.push(currUser);

  //The res.json method will return JSON data with the user's match. 
  res.json(bestMatch);
});
    

  // ---------------------------------------------------------------------------
  // useful relic from class resturant exercise


      // Empty out the arrays of data
  app.post("/api/clear", function(req, res) {

    friends.length = 0;
    res.json({ ok: true });
  });
};
