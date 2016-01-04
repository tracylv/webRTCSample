var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('demo');
});

app.get('/demo1', function (req, res) {
  res.render('demo1');
});

app.get('/demo2', function (req, res) {
  res.render('demo2');
});

app.get('/demo3', function (req, res) {
  res.render('demo3');
});

app.get('/demo4', function (req, res) {
  res.render('demo4');
});

app.get('/demo5', function (req, res) {
  res.render('demo5');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
