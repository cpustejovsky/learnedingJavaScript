# const vs. let

* With ES6, there is no longer any need to use the `var` keyword
* const
  * declares variables where we do **NOT** expect the value to change.
  * example:
    * ```javascript
        var name = 'Jane';
        var title = 'Software Engineer';
        var hourlyWage = 40;

        //ES6

        const name = 'Jane';
        let title = 'Software Engineer';
        let hourlyWage = 40;
    ``` 
* Use `const` and `let` to help future developers (including yourself) know what needs to stay the same and what doesn't
  