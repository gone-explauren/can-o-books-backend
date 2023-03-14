'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./models/book.js');

// bring in mongoose
const mongoose = require('mongoose')

// add validation to confirm we are wired up to out mongo DB
// documentation from mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// connect Mongoose to MongoDB
mongoose.connect(process.env.DB_URL);

// USE
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/test', (request, response) => {
  response.send('test request received')
});

app.get('/book', getBooks);
async function getBooks(rec, res, next) {
  try{
    // mongoose documentation => queries
    let results = await Book.find({});
    // send to frontend
    res.status(200).send(results);
  } catch(err) {
    next(err);
  }
};

app.get('/', (request, response) => {
  response.status(200).send('Oh hi there!');
});

app.get('*', (request, response) => {
  response.status(404).send('Oopsie!');
});

// ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on ${PORT}`));
