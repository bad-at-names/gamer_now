const functions = require('firebase-functions');
const admin = require('firebase-admin');
const OverwatchLeague = require('overwatchleague');


admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// user score function pseudocode
    // fetch users tables from firebase
    // for each user {
    //     for each player {
    //          grab playerScore
    //     }
    //     week = avg(playerScore)
    //     score = score+week //show to user on leaderboard
    // }

// playerScore function pseudocode
    // fetch the weeks document from firebase
    // for each match{
    //     for each map{
    //         mount api endpoint of that matchid and map#
    //         mapScore = avg((elim*1)+(death*(-3))+(dmg*.001)+(heal*.001))
    //     }
    //     matchScore = avg(mapScore)
    // }
    // playerScore = avg(matchScore)

// playerScore calculator
exports.playerScore = functions.https.onRequest((request, response) => {
    var db = firebase.firestore();
    // var matches = db.collection('weeks');
    db.collection("weeks").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
    response.send("Updating last weeks player scores");
});