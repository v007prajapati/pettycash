var Users     = require('../../models/users.model');
console.log("Users model added in db");
var GlobalHelpers = require('../helper/global.helper');
module.exports = function(app) {
  'use strict';
  
  	app.get('/users', function(req, res) {
		Users.find(function(err, data){
			if(err){
				return res.json({
					success: false,
					error_code: "SELECT_ERROR",
					error: err,
					message: null
				});
			}
			else{
				return res.json({
					success: true,
					data: data
				});
			}
		});
	});
	
	app.post('/users/create', function(req, res) {
		var params = req.body;

		var checkRequiredFields = GlobalHelpers.checkRequiredFields(['first_name', "last_name", "contact_number", "password"], params);
		if(!checkRequiredFields.success){
			return res.json(checkRequiredFields);
		}

		console.log("finally");
		var user = new Users({ 
			first_name: params.first_name,
		 	last_name: params.last_name,
			password: params.password,
			contact_number: [{
				number: params.contact_number
			}]
		});
		user.save(function(err, data){
			console.log("params: ",user);
			if(err){
				return res.json({
					success: false,
					error_code: "INSERT_ERROR",
					error: err,
					message: null
				});
			}
			else{
				return res.json({
					success: true,
					message: "User created successfully",
					data: data
				});
			}
		});
		// res.json(params);
	});

};