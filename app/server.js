const express = require('express');
const app = express();

// Define request response in root URL (/)
app.get('/', function(req, res) {
    res.status(200).json({success: true, message: 'Hello World'});
});

app.listen(8083, function() {
    console.log(
        (new Date().toTimeString()) +
        `Sample App started on port 8083 !`);
});

module.exports = app;