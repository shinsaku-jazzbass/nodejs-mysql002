var express = require('express');
var router = express.Router();
var path = require('path');
const database = require('../config/db');

/* GET home page. https://www.youtube.com/watch?v=SnncAvMYxgY */
router.get('/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM sample_data WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('editdata', {title: 'Edit MySQL Table Data', action:'edit', sampleData:data[0]});

	});

});

router.post('/:id', function(request, response, next){

	var id = request.params.id;

	var first_name = request.body.first_name;

	var last_name = request.body.last_name;

	var age = request.body.age;

	var gender = request.body.gender;

	var query = `
	UPDATE sample_data 
	SET first_name = "${first_name}", 
	last_name = "${last_name}", 
	age = "${age}", 
	gender = "${gender}" 
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Sample Data Updated');
			response.redirect('/alllist');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM sample_data WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Sample Data Deleted');
			response.redirect("/alllist");
		}

	});

});


module.exports = router;