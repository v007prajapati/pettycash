var Users     = require('../../models/users.model');
console.log("Users model added in db");
var GlobalHelpers = require('../helper/global.helper');
module.exports = function(app) {
  'use strict';
  
  	app.get('/accounts', function(req, res) {
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
	
	app.post('/accounts/create', function(req, res) {
		var params = req.body;

		var checkRequiredFields = GlobalHelpers.checkRequiredFields(["name"], params);
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

	app.post('/accounts/remove', function(req, res) {
		var params = req.body;

		var checkRequiredFields = GlobalHelpers.checkRequiredFields(["id"], params);
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

	app.post('/accounts/add_members', function(req, res) {
		var params = req.body;

		var checkRequiredFields = GlobalHelpers.checkRequiredFields(["userids"], params);
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

	app.post('/accounts/remove_members', function(req, res) {
		var params = req.body;

		var checkRequiredFields = GlobalHelpers.checkRequiredFields(["userids"], params);
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