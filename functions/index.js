'use strict';
const functions = require('firebase-functions');
const app = require('express')();
const _ = require('lodash');
const gsheet = require('google-spreadsheet-to-json');
app.get('/api/gapi/:sheet_id', (req, res) => {
    const sheet_id = req.params.sheet_id;
    gsheet({
        spreadsheetId: sheet_id,
        // other options...
    })
        .then(function (result) {
            console.log(result.length);
            console.log(result);
            res.json(result);
        })
        .catch(function (err) {
            console.log(err.message);
            console.log(err.stack);
            res.json(err);
        });
});
exports.app = functions.https.onRequest(app);
