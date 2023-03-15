'use strict';

// each book in the database will look like this...
/*
	let Book = {
		title:
		release_date:
		img_url:
		description:
		etc...
	}
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// this is the Schema aka the rules of what are allowed in the database
const bookSchema = new Schema ({
	title: {type: String, required: true},
	author: {type: String, required: true},
	release_date: {type: String, required: false},
	status: {type: String, required: true},
	img_url: {type: String, required: false},
	description: {type: String, required: true},
});

// define our model
// this is the functionality of how we interact with the database
const BookModel = mongoose.model('Book', bookSchema)

// the server.js will have access to the functionality of the database
module.exports = BookModel;