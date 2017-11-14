
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');

//define the schema for our user model
var contentSchema = mongoose.Schema({	
	content: String,
	created_date: Date,
	updated_date: Date,
});

//create the model for users and expose it to our app
module.exports = mongoose.model('contents', contentSchema);