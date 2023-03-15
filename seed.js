'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {

	// add books to the database, hardcoded
	// follow the same structure as bookSchema
	await Book.create({
		title: 'Nature Poem',
		author: 'Tommy Pico',
		release_date: 'May 09, 2017',
		status: 'Content Consumed (read)',
		description: 'An intriguing book of poetry by Tommy Pico.',
	});
	console.log("Nature Poem was added");

	await Book.create({
		title: 'Night Sky with Exit Wounds',
		author: 'Ocean Vuong',
		release_date: 'April 05, 2016',
		status: 'Content Consumed (read)',
		description: 'A delightful book of poetry by Ocean Vuong',
	});
	console.log("Night Sky with Exit Wounds was added");

	await Book.create({
		title: 'When I Grow Up I Want to Be a List of Further Possibilities',
		author: 'Chen Chen',
		release_date: 'April 11, 2017',
		status: 'Untouched, but Touchable (unread)',
		description: 'A presumably compelling book of poetry by Chen Chen',
	});
	console.log("When I Grow Up I Want to Be a List of Further Possibilities was added");

	await Book.create({
		title: 'Malleus Maleficarum',
		author: 'Henricus Institor',
		release_date: '1487',
		status: 'Information Absorbed through Telepathy (started and/or skimmed)',
		description: '"The Hammer of Witches," a medieval guide for hunting witches written by possibly the most pretentious motherfucker of the era.',
	});
	console.log("Malleus Maleficarum was added");

	await Book.create({
		title: 'Postcolonial Love Poem',
		author: 'Natalie Diaz',
		release_date: 'March 03, 2020',
		status: 'Content Consumed (read)',
		description: 'A lovely book of poetry by Natalie Diaz',
	});
	console.log("Postcolonial Love Poem was added");

	// disconnect when you're done because in the real world, this costs $$
	mongoose.disconnect();
}

// envoke
seed();

// seed will run *seperately* from server and will run only once
// in terminal: node seed.js