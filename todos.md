#To Do List

##JavaScript
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
* Why does `let` in the `for` loop lead to 0,1,2 instead of 3,3,3?
```javascript
function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function(){
                console.log(i);
            }
        )
        
    }

    return arr;
};


var fs = buildFunctions();

fs[0]();//0
fs[1]();//1
fs[2]();//2
```

##IDKJS
For deep dives into JavaScript

