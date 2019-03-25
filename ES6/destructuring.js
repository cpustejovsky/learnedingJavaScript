//Legacy Practice
var expense = {
    type: 'Business',
    amount: '$45.00'
};

var type = expense.type;
var amount = expense.amount;

//ES6
const expenseNew = {
    typeNew: 'New Business',
    amountNew: '$90.00'
};

const { typeNew, amountNew, doesNotExist } = expenseNew;

console.log(type); //Business
console.log(amount); //$45.00
console.log(typeNew);//New Business
console.log(amountNew);//$90.00
console.log(doesNotExist);//undefined

var savedFiled = {
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

console.log(fileSummary(savedFiled));
console.log(fileSummaryES6(savedFiled));