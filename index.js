$(document).ready(function() {
  function doSomething() {
    var playerId = null//something in the json
    console.log(playerId)
    //need playerId to replace the 1 at the end of api call
//stats.nba.com/stats/{endpoint}/?{params}
      $.ajax('stats.nba.com/stats/playercareerstats/?PlayerID='+playerId+'/',{
        success: function(playerstats){



}})}})
