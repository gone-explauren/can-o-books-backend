'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require(./models/book.js);

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

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
