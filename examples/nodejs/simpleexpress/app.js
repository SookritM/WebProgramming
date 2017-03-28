// Taken from http://expressjs.com/4x/api.html
var express = require('express');

// Required for processing GET and POST parameters
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

/* General form:

app.HTTP_VERB('ROUTE', function(request, response) {
	// Do something
});
*/

app.get('/', function(request, response) {
	console.log(request.query);
	response.send("Hello world");
});

app.get('/pikachu', function(request, response) {
	response.send("You've won the game!");
});

app.post('/submit', function(request, response) {
	var username = request.body.username;
	console.log(username);
	response.send("Hello, you successfully sent the username " + username + "!");
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);
