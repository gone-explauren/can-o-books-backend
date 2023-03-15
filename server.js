'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// bring in mongoose
const mongoose = require('mongoose')

// models
const Book = require('./models/book.js');

// connect Mongoose to MongoDB
mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to out mongo DB
// documentation from mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose is connected');
});

// USE
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/test', (request, response) => {
  response.send('test request received')
});

app.get('/books', getBooks);

async function getBooks(rec, res, next) {
  try{

    // mongoose documentation => queries
    let results = await Book.find({});
    // send to frontend
    res.status(200).send(results);

  } catch(err) {

    console.error(err);
    res.staus(404).send('This book does not exist.');
    next(err)

  }
};

app.post('/books', postBooks);

async function postBooks(req, res, next) {
  try {

    // add books to database
    let createdBook = await Book.create(req.body);
    res.status(200).send(createdBook);

  } catch(err) {

    console.error(err);
    res.staus(500).send('This book could not be added.');
    next(err)

  }
};

// If I have this URL coming in the request:
// http://localhost:3001/books/637bceabc57c693faee21e8f
// I access the value 637bceabc57c693faee21e8f with:
// req.params.id
// 'id' is the variable I declared here:
app.delete('/books/:id', deleteBooks);

async function deleteBooks(req, res, next) {
  try {

    let id = req.params.id;
    // do not expect anything to be returned by findByIdAndDelete
    await Book.findByIdAndDelete(id);
    res.status(200).send('Book deleted');

  } catch(err) {

    console.error(err);
    res.staus(404).send('This book could not be deleted.');
    next(err)

  }
};

// app.get('/', (request, response) => {
//   response.status(200).send('Welcome!');
// });

app.get('*', (request, response) => {
  response.send('I could not find this resource.');
});

// ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on ${PORT}`));
