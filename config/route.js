module.exports = function(app){

	/* Default Route of the Application*/
	app.get('/', function(req, res) {    
		res.render('index', {root:__dirname, title: 'The index page!' })
	});

	/*Home Page*/
	app.get('/home',function(req,res){	
		res.render('home')
	});

}