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
* 


