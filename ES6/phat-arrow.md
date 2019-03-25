# ~~Phat~~ Fat Arrow Functions 

## ES5 Way
```javascript
var add = function (a, b) {
    return a + b;
};
add(1,2); //outputs 3
```

## ES6 Way.. the Phat Way
```javascript
const add = (a, b) => a + b; //no curly-braces and you got yourself an implicit return statement!
};
add(1,2); //outputs 3
```

Also, you don't even need parens if just one arg
```javascript
const add3 = a => a + 3; //no curly-braces and you got yourself an implicit return statement!
};
add(2); //outputs 5
```

## When to use Phat Arrow Functions
```javascript
const team = {
    members: [
        'Charles',
        'Catherine'
    ],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}.`;
        });
    }
};

console.log(team.teamSummary());

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

const profile = {
    name: 'Alex',
    getName: function(){ return this.name;}
};

console.log(profile.getName());
````