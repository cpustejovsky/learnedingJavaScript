foo1 = () => {
    return {
        bar: 'bar'
    };
}

foo2 = () => {
    return 
    {
        'bar'
    }
}

console.log(foo1());
console.log(foo2());