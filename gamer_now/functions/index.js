const functions = require('firebase-functions');
// const firebase = require("firebase");
// const firebase = require("firebase/firestore");
const OverwatchLeague = require('overwatchleague');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// user score function pseudocode
// for each user {
//     for each player {
//          grab playerScore
//     }
//     week = avg(playerScore)
//     score = score+week //show to user on leaderboard
// }

// playerScore function pseudocode
// for each match{
//     for each map{
//         mount api endpoint of that matchid and map#
//         mapScore = avg((elim*1)+(death*(-3))+(dmg*.001)+(heal*.001))
//     }
//     matchScore = avg(mapScore)
// }
// playerScore = avg(matchScore)

//initializing the players table
exports.playerTable = functions.https.onRequest((request, response) => {
    // db = firebase.firestore();
    const OWL = new OverwatchLeague();
    // db.collection("players").add()
    OWL.getTeams().then(res => {
        teams: res.data.data
    });
    response.send({teams: 'data'});
});