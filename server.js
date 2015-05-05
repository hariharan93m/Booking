var express = require('express');
var app = express();
var Handler=require('./FileHandler');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', process.cwd() + '/views');


app.get('/',Handler.getHtml);
app.get('/getData',Handler.getData);
app.get('/insertData',Handler.insertData);
var server = app.listen(3131, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at on http://%s:%s', host, port);

});