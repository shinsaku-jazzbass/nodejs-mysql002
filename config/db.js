//require("dotenv").config()は.envを有効にするrequire
require("dotenv").config();
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'testing',
	user : 'root',
	password : 'root'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully!!');
	}
});

module.exports = connection;



