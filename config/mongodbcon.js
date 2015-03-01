var mongo = require('mongodb');
var BSON = mongo.BSONPure;
var MongoClient = mongo.MongoClient;
var users ;

exports.getUsers = function() {
	MongoClient.connect("mongodb://localhost:27017/nodelogin", function(err, db) {				
		var collection = db.collection('user');
		collection.find({}).toArray(function(err, docs) {						
			users = docs;
			console.log(docs);
		}); 		    
	});
	return users;
}

exports.getUserById = function(id){
	MongoClient.connect("mongodb://localhost:27017/nodelogin", function(err, db) {				
		var collection = db.collection('user');
		var o_id = new BSON.ObjectID(id);
		collection.findOne({_id : o_id},function(err,docs){
			console.log(docs);
			users = docs;
		});		
	});	
	return users;
}