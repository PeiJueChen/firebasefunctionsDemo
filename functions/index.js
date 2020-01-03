// const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const app = express()

app.get('/timestamp', function (req, res) {
    res.send(`${Date.now()}`);
})

app.get('/timestamp-cached', function (req, res) {
    /// 让响应缓存住, 
    res.set('Cache-Control','public, max-age=300, s-maxage=600');
    res.send(`${Date.now()}`);
})


app.get('/', function (req, res) {
    let j = {"json": "value"};
    res.json(j);
})

exports.app = functions.https.onRequest(app);
// app.listen(8889)