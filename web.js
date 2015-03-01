var express = require("express");


var app = express();


app.use("/styles", express.static(__dirname + '/public/css'));
app.use("/image", express.static(__dirname + '/public/image'));
app.use("/script", express.static(__dirname + '/public/script'));

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.set('view engine', 'ejs');

/*Applications Routes*/ 
require('./config/route')(app);

/*Application configuration*/
require('./config/config');


var port = process.env.PORT || 3030

app.listen(port, function() {
	console.log("Listening on " + port);
});