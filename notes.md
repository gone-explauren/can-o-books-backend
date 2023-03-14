# Non-Relational Databases

### aka NoSQL database

* everything saves as a document made up of JSON
* it is an object of unrelated data
* no structure in a non-relational database
* relational databases use a table to organize data

## use an ODM (ie Mongoose) to give non-relational databases structure

### ODM: Object Document Mapping

### (ORM for relational databases)

# Mongoose: an ODM

* Schema: diagram or template of what the data will look like (the rules, what the object is required to have to be allowed in the database)
* Model: comes with the functionality of what wee need to implement and interact withour data (the how-to)

### Why not just use a relational database?

we can do all of this using JavaScript
will use Relational Databases in 401

## What do I need?

To connect your server to the database, you need..

* Connection String (from MongoAtlas), replace <password> with your password
* Name the database (between the / and the ? in the Database Connection String)
* Zero out the IP address so anyone can access the database
* npm i mongoose
* touch seed.js clear.js

### Seed.js

### Clear.js