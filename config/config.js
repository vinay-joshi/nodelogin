var path = require('path');
var rootpath = path.normalize(__dirname);


module.export = {
	development :{
		db : 'mongodb://localhost/nodelogin',
		rootpath :rootpath;
	}
}