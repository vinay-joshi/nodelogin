var mongodbcon = require('./mongodbcon');

module.exports = function(app){

	/* Default Route of the Application*/
	app.get('/', function(req, res) {    
		res.render('index', {root:__dirname, title: 'The index page!' })
	});

	/*Home Page*/
	app.get('/home',function(req,res){	
		res.render('home')
	});


	app.get('/api/users',function(req,res){
		var name = "user";		
		res.send(mongodbcon.getUsers());
	});

	app.get('/api/user/:id',function(req,res){
		var id = req.params.id;
		console.log(id);
		res.send(mongodbcon.getUserById(id));
	});


	app.all('/api/*' ,function(req,res){
        res.send(404);
    });

}