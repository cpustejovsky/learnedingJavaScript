# Promises!!!
* Yay!!!!
* Promises have been around for years!
  * But with ES6, they are now natively in JavaScript
  
## Terminology
* Promises exist in three possible states:
  * **unresolved**: where the Promise is waiting for something to finish
  * **resolved**: where that something finished and all went well
  * **rejected**: where that something finished and something went wrong
* The callback you use for **resolved** is `.then`
* The callback you use for **rejected** is `.catch`
### Code Example
```javascript
let counter = 0;
function startGame() {

    document.querySelector('button').addEventListener('click', () => {
        ++counter;
    });
    /*
    A promise is a tool we have for managing asynchronous code flow throughout our applications
    For handling any code that is going to happen at any point in the future
    */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(counter > 5) { //it's up to the dev to decide what resolves or rejects a promise
                resolve(); 
            } else {
                reject();
            }
        }, 2000);
    });
};
//this is what developers usually use
startGame()
    .then(() => alert(`You won! You clicked ${counter} times!`))//chains on to the Promise; called if resolved
    .catch(() => alert(`Awww! You only clicked ${counter} times. You needed to click at least five times.`))//chains on to the Promise; called if rejected
```
Hooking this up to some html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Refresher on Promises</title>
</head>
<body>
    <button>Click!</button>    
    <script src="app.js"></script>
</body>
</html>
```

