// Configure Express Application
var express = require('express');
var app = express();
var ejs = require('ejs');

//app configuration
app.set('title', 'AKQA Anoraks');
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.configure(function(){
	console.log();
    app.use(express.static(__dirname));
});

	

// Templating Configuration
ejs.open = '{{';
ejs.close = '}}';

var pageData = {
	title: "AKQA Anoraks"
}



app.get('/', function(req, res){
	res.render('layouts/main', pageData);
});

app.listen(3000);