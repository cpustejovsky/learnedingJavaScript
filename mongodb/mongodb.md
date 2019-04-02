# MongoDB

## What is MongoDB?
* Database!
  * Used for storing persistent data in an application.
* Separated from the wide, wide, world wide web with a web server
  * In my own case, I'll be using NodeJS, but Ruby, Python, etc. all can also work
  * Where user permissions and similar security features live
* Mongoose is an **ORM or Object-Relational Mapping** Tool 
  * converts data between the NodeJS server and MongoDB

## MongoDB Data Storage
### Two Ideas!
First! We can have multiple internal databases inside of a single mongo instance
![multi-dbs-in-one-mongo-instance](../images/multi-dbs-in-one-mongo-instance.png)
Second! We have **collections!**
* Core unit of what stores data inside a Mongo Database
* Store different types of data in these collections
* No mixing and matching!

## Core Mongoose/Mongo Operators
* Cread
* Read
* Update
* Destroy

## Notes on `users` repository

## Overview
Creating a collection of users, interacting with them with Mongoose, and testing with Mocha

## Structure
* `/src/`
  * `user.js`
    * Maps Mongoose and Mongo togetheer
* `/test/`
  * `create_test.js`
  * `read_test.js`
  * `update_test.js`
  * `destroy_test.js`

## Test Helper File
Found inside `/test/` and is called, well, `test_helper.js`

Looks like
```javascript
//bring in the Mongoose module
const mongoose = require('mongoose');
//assignment operator for ES6 Promises
mongoose.Promise = global.Promise;

//the before function makes sure that mongodb is connected before the tests begin
before((done) => {
    mongoose.connect('mongodb://localhost/users_test', {
        useNewUrlParser: true
    });
    mongoose.connection/*No semicolons because these are chained methods*/
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
})

// done does a bit of mocha magic to add asynchronisity
beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections;
    users.drop(() => {
        comments.drop(() => {
            blogposts.drop(() => {
                done();
            });
        });
    });
});
```
* This is where we put any code that is needed to set up our tests
* How our code executes when we run a command to test our project
![test-helper-setup](../images/test-helper-setup.png)
* Mocha starts up
* Before that, Mongoose is a JavaScript package (not made of magic)
  * So we need to tell Mongoose to connect to Mongo which takes some amount of time.
* So we check whether Mongoose connected 

## Mongoose Models
![mongoose-models](../images/mongoose-models.png)
* Mongoose models represent a record in a specific collection.
* From this model, we create instances which represent single records in our collection
* Models have a **schema** which describes the properties each record should have along with the data those properties should be.
* You can check out the user model in `/src/user.js`
  * At its most basic you:
    * require in mongoose and mongoose's Schema method
    * use mongoose's Schema to define your model's schema
    * use `mongoose.model('model', modelSchema);` to create your model
    * export your model

## Creating Model Instance
Example from `create_test.js`
```javascript
const joe = new User({ name: 'Joe'});
joe.save()
```
* without `joe.save()`, the joe User instance is not persisted to the database
* 