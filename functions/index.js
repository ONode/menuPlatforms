'use strict';
const App = require('./app');
const functions = require('firebase-functions');
exports.app = functions.https.onRequest(App);
