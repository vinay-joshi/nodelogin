var express = require("express"),
mongo = require('mongodb');


var app = express();


app.use("/styles", express.static(__dirname + '/public/css'));
app.use("/image", express.static(__dirname + '/public/image'));
app.use("/script", express.static(__dirname + '/public/script'));

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('view engine', 'ejs');

/*Applications Routes*/ 
require('./config/route')(app);

var mongoClient = mongo.MongoClient;

//Mongo db connection
mongoClient.connect("mongodb://localhost:27017/multivision", function(err, db) {
	if(!err) {
		console.log("We are connected");
	}
});

var port = process.env.PORT || 3030

app.listen(port, function() {
	console.log("Listening on " + port);
});