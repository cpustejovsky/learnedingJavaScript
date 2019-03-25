# Destructuring

## Legacy Example
```javascript
var expense = {
    type: 'Business',
    amount: '$45.00'
};

var type = expense.type;
var amount = expense.amount;
console.log(type); //Business
console.log(amount); //$45.00
```

## Now in ES6
```javascript
const expenseNew = {
    typeNew: 'Business',
    amountNew: '$45.00'
};

const { typeNew, amountNew, doesNotExist } = expenseNew;

console.log(typeNew);//Business
console.log(amountNew);//$45.00
console.log(doesNotExist);//undefined
```

## Additional Example of Destructuring in Function Parameters
```javascript
const savedFiled = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
    return `the file ${file.name}${file.extension} is of size ${file.size}`
};
function fileSummaryES6({ name, extension, size }) {
    return `the file ${name}${extension} is of size ${size}`
};

console.log(fileSummary(savedFiled)); //the file repost.jpg is of size 14040
console.log(fileSummaryES6(savedFiled)); //the file repost.jpg is of size 14040
```


## Destructuring Arrays
* We can also destructure arrays!
* Destructuring arrays is about pulling off individual elements instead of object properties
* Example
```javascript
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name, name2, name3, name4 ] = companies;
console.log(name); //Google
console.log(name2); //Facebook
console.log(name3); //Uber
console.log(name4); //undefined
```
* Ultimately, it's the difference between `const [ name ] = companies;` and `const firstcompany = companies[0];`
* **Note**: use `[]` instead of `{}` for arrays
* Destructuring arrays can be combined with rest and spread operators
```javascript
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name, ...rest ] = companies;
console.log(name); //Google
console.log(rest); // ['Facebook', 'Uber']
```

## Destructuring Arrays and Objects

### Array of Objects
```javascript
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' },
];

//legacy
console.log(companies[0].location); // 'Mountain View'
```
* Destructuring the array
```javascript
const [ location ] = companies;
console.log(location); // { name: 'Google', location: 'Mountain View' }
```
* Destructuring the object within the array
```javascript
const [{ location }] = companies
console.log(location); // 'Mountain View'
```
* To spell it out completely
```javascript
const [ locationArray ] = companies;
const { location } = locationArray;
console.log(location); // 'Mountan View'
```

### Object of Arrays
```javascript
const Google = {
    locations: [ 'Mountain View', 'New York', 'London']
};
const { locations: [name, name2, name3] } = Google;
console.log(name); //Mountain View
console.log(name2); //New York
console.log(name3); //London
```
Broken down
```javascript
const Google = {
    locations: [ 'Mountain View', 'New York', 'London']
};

const {locations} = Google;
console.log(locations); // [ 'Mountain View', 'New York', 'London' ]

const [name, name2, name3] = locations;
console.log(name); //Mountain View
console.log(name2); //New York
console.log(name3); //London
```
**Note**: usefulness may vary

## When To Use Destructuring
* A function with too many paramaters to easily keep track of
  * Instead of passing a list of strings, you could pass an object with properties
```javascript
function signup(username, password, email, dateOfBirth, location) {
    //create new user
}
signup('myname', 'mypassword', 't@t.com', '1/1/1970, Houston')
```

```javascript
function signup({ username, password, email, dateOfBirth, location }) {
    //create new user
}
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 't@t.com',
    dateOfBirth: '1/1/1970',
    city: 'Houston'
};
signup(user);
```
* Now the order of arguments does not matter. Reduces potential for errors.