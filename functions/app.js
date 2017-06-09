/**
 * Created by hesk on 9/6/2017.
 */
'use strict';
//developed by hesk 10-6-2017
const app = require('express')();
const _ = require('lodash');

const gsheet = require('google-spreadsheet-to-json');
function sheetcms(id, res, sheet_no) {
    gsheet({
        spreadsheetId: id,
        worksheet: sheet_no,
        propertyMode: 'pascal'
    }).then((result) => {
        console.log(result.length);
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err.message);
        console.log(err.stack);
        res.json(err);
    });
}
app.get('/api/menu/:sheet_id', (req, res) => {
    const sheet_id = req.params.sheet_id;
    sheetcms(sheet_id, res, 0);
});
app.get('/api/tabletentries/:sheet_id', (req, res) => {
    const sheet_id = req.params.sheet_id;
    sheetcms(sheet_id, res, 2);
});
app.get('/api/types/:sheet_id', (req, res) => {
    const sheet_id = req.params.sheet_id;
    sheetcms(sheet_id, res, 1);
});
module.exports = app;