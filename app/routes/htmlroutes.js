var path = require('path');

// Export HTML routes
module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.get('/generator', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/generator.html'));
	});
}