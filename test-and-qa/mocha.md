# Mocha Testing Framework

## Mocha Structure
* Describe function
  * with it functions nested inside
* Both describe and it functions take two parameters
  * a string to make the test readable
  * a function
* also need to require in `('assert')`
* will need to set up `npm run test` in `package.json`
```json
  "scripts": {
    "test": "nodemon --exec 'mocha -R min'"
  },
```
* also need to require in the model you want to test.
  
## Dropping Collections
* Before running a test suite, drop collections so you have a fresh start and you aren't passing tests because of previous results.
* Code example in `test_helper.js` that makes this happen.
```javascript
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
The `done()` method adds asynchronisity. From [The Lost Techies Blog](https://lostechies.com/derickbailey/2012/08/17/asynchronous-unit-tests-with-mocha-promises-and-winjs/)
> Mocha can provide a “done” callback method that you can call from the beforeEach call, afterEach call, it calls, and more. This “done” parameter, when present in your callback function, tells Mocha that you are writing an asynchronous test. This causes mocha to enter a timer when the function with the “done” parameter runs, waiting for the async function to finish – which is facilitated by either calling the `done()` function, or by exceeding a 2 second timeout.
> 
> The basic idea behind the `done()` call is that you call this after your async code has completed, and your test has modified everything it needs to modify, so you can check the results correctly.

## Ensure MongoDB Connection for Testing
To do this, we wrap a before hook around the mognoose connect logic
```javascript
before((done) => {
    mongoose.connect('mongodb://localhost/users_test', {
        useNewUrlParser: true
    });
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
})
```

## Ensure Model Instance Existence for Testing Queries
```javascript
let joe, maria, alex, zach;

  beforeEach((done) => {
      alex = new User({name: 'Alex' });
      joe = new User({name: 'Joe' });
      maria = new User({name: 'Maria' });
      zach = new User({name: 'Zach' });
      
      Promise.all([alex.save(), joe.save(), maria.save(), zach.save()])
          .then(() => done());
  });
```
For a single user this would look like
```javascript
let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe' });
        joe.save()
          .then(() => done());
    });
```

Declare to model instance to the outside execution context and make sure a new model is instantiated and saved.

**WARNING!** for testing the `.find` query, you'll need to use the `.toString()` method to make an assertion that can pass.

```javascript
console.log(typeof(joe._id)); //5ca4a5d9e4a02d4f8b949c87
console.log(typeof(joe._id)); //object
//WHY
assert(users[0]._id.toString() === joe._id.toString());
done();
```

## Testing for Updated Records and Re-useable Code
```javascript
function assertName(operation, done) {
    operation
        .then(() => User.find({}))
        .then((users) => {
            assert(users.length === 1);
            assert(users[0].name === 'Alex');
            done();
        });
};
```

Starting with the `.then`