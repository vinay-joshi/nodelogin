var mongoose = reqire('mongoose');
var db ;
module.exports = function(cofig){
	mongoose.connect(config.db);
	db = mongoose.connection;
	db.on('error',console.error.bind(console,'Connection Error'));
	db.once('open',function callback()){
		console.log('Data base connection is open');
	}
	return db;
}