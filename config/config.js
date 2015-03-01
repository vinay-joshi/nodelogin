var path = require('path');
var rootpath = path.normalize(__dirname);

module.exports = {
	development :{
		db : "mongodb://localhost:27017/nodelogin",
		rootPath :rootpath,
		port : process.env.PORT || 3030
	},
	production :{
		db : 'mongodb://vinay.joshi:blogging_db@ds061189.mongolab.com:61189/blogging_db',
		rootPath  : rootpath ,
		port : process.env.PORT || 80

	}
}