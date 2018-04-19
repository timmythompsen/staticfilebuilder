var path = require('path');

// Export API routes
module.exports = function(app) {
	
	app.get('/api/data', function(req, res) {
		res.json(data);
	});

	//Generate html doc 
	app.post('/api/generator', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));
		res.json({userInput});
		//var userResponses = userInput.content;
		// console.log('userResponses = ' + userResponses);

		

		
		//content.push(userInput);

		// Send appropriate response
		//res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};