var Transactions     = require('../../models/transactions.model');
var GlobalHelpers = require('../helper/global.helper');
module.exports = function(app) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  /*router.route('/transactions/')
  .get(function(req, res, next) {
    // Return user
  }) 
  .put(function(req, res, next) {
    // Update user
  })
  .patch(function(req, res,next) {
    // Patch
  })
  .delete(function(req, res, next) {
    // Delete record
  });

  router.route('/')
  .get(function(req, res, next) {
    // Logic for GET /users routes
  }).post(function(req, res, next) {
    // Create new user
  });*/
  	/*app.get('/transactions')(function(req, res, next) {
    	// Return user
    
  	});*/
  	app.get('/transactions', function(req, res) {
		res.json({ message: 'Get all transactions' });
	});
	
	app.post('/transactions/create', function(req, res) {
		var params = req.body;
		/*// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});*/
		
		var checkRequiredFields = GlobalHelpers.checkRequiredFields(['name', "transaction_type", "amount", "userid"], params);
		if(!checkRequiredFields.success){
			return res.json(checkRequiredFields);
		}

		console.log("finally");

		res.json(params);
	});

};