var path = require('path');
var express = require('express');

// Create new express application
var app = express();

// Distribution directory
var dirDist = path.resolve(__dirname, '..', 'dist');

// Serve static files from dist directory
app.use(express.static(dirDist));

// Set port to given ENV or default 5000
app.set('port', (process.env.PORT || 5000));

// Views is directory for all template files
app.set('views', dirDist);

// Serve index file on default request
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

// Start listening
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
