var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/dump.json', function(hoho, haha) {
  haha.set('Content-Type', 'application/json');
  haha.send(hoho.query);
});
app.post('/lemonade', function (hoho, haha) {
  var flavor = hoho.body.flavor;
  if (flavor == 'mango') {
    haha.send("<h1>Today's special</h1>");
  }
  else {
    haha.send("<h1>Hello " + flavor + " lemonade!</h1>");
  }
});
app.get('/lemonade', function (hoho, haha) {
  haha.set('Content-Type', 'text/html');
  haha.send("What's wrong with these people?");
});
app.post('/', function(hoho, haha) {
  haha.set('Content-Type', 'text/html');
  haha.send("I'm Blue, Da Ba Dee Da Ba Die");
});
app.listen(process.env.PORT || 3000);