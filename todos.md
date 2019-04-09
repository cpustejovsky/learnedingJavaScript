# To Do List

## Projects

### Automate the Boring Stuff with Node.JS

* Reading and Writing Files
* Organizing Files
* Web Scraping
* Working with:
  * Excel
  * PDF
  * Word Docs
  * CSV
  * JSON data
* Keeping time, scheduling tasks, launching programs
* Sending emails and text messages
* Manipulating images
* 

## JavaScript
For foundational and basic JavaScript. 

* Does `for...of` have the same issues that Tony Alicea brings up about `for...in` as they relate to changes in the base Array object
* Learn more about `Symbol`
* Should I use `let` or `const` for objects?
* What are overloaded functions?

## ES6
For upgrades, updates, and improvements to JavaScript

* Read more about generators and iterators
  * Deep dive into them with additional reading
    * https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
    * https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
    * https://hackernoon.com/javascript-es6-you-dont-really-need-to-learn-generators-96aa2e9114fa
    * https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950
  * Work with them more in practice to get a better feel for them.
* How does the `let` keyword provide the same solution that `var self = this` does for functions inside of methods


## IDKJS
### Scope & Closures
* LHS vs RHS lookups?
  * Reread chapter to one to get a better idea.
  * Write out the rules and test yourself?
## NodeJS
* Read over and understand NodeJS Core Modules
* Look deeper into Events and the Event Emitter
* read up on this http://expressjs.com/en/guide/routing.html

## MongoDB
* How document-oriented databases work conceptually
* Collections
  * https://docs.mongodb.com/manual/core/databases-and-collections/
* Documents
  * https://docs.mongodb.com/manual/core/document/
* Mongoose Models
  * Do schemas work or take inspiration from function constructors?
  * Is there a way to use prototypal inheritance with mongodb? with mongoose?
* RoboMongo vs terminal/shell?
  * pros and cons?
* Mongoose Queries
  * look over these more
    * https://mongoosejs.com/docs/queries.html
      * what is the real difference between `findOneaAndUpdate` vs `findByIdAndUpdate`? What are the different use-cases?
        * Per Stephen Grider, `findByIdAndUpdate` will be for when you have the id of a very specific user.
* MongoDB Operators
  * https://docs.mongodb.com/manual/reference/operator/
* Validation
  * look up `validate()` vs `validateSync()` with mongodb and nodejs
    * https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c
    * [MongoDB Document Validation](https://www.mongodb.com/blog/post/document-validation-part-1-adding-just-the-right-amount-of-control-over-your-documents)
    * [Mongoose Validation](https://mongoosejs.com/docs/validation.html)
    * 

## Testing
* Better understand [Mocha hooks](https://medium.com/@kanyang/hooks-in-mocha-87cb43baa91c)