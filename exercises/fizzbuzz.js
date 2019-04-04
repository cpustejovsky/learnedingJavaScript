let count = 1;
for (let index = 0; index < 100; index++){
    if (count % 3 === 0 && count % 5 === 0) 
        {
            console.log(`(${count})FizzBuzz!`);
        } else
    if (count % 3 === 0) 
        {
            console.log(`(${count})Fizz!`);
        } else
    if (count % 5 === 0)
        {
            console.log(`(${count})Buzz!`);
        } 
    else
        {
            console.log(count);
        }
    count ++;
}  
