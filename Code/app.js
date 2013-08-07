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
	console.log('');
    app.use(express.static(__dirname));
});

	

// Templating Configuration
ejs.open = '{{';
ejs.close = '}}';

var pageData = {
	title: "AKQA Anoraks",
	questions: {
		questOne: {
			title: "Overall, how would you rate the event?",
			answers: {
				0: {
					label: "Excellent",
					type: "radio"
				},
				1: {
					label: "Very Good",
					type: "radio"
				},
				2: {
					label: "Fairly Good",
					type: "radio"
				},
				3: {
					label: "Mildly Good",
					type: "radio"
				},
				4: {
					label: "Not Good at all",
					type: "radio"
				}
			}
		}
	}
}



app.get('/', function(req, res){
	console.log('server started on port 3000');
	res.render('layouts/main', pageData);
});

app.listen(3000);