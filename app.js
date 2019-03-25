const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' },
];

//legacy
console.log(companies[0].location); // 'Mountain View'

//ES6
const [ locationArray ] = companies;
const { location } = locationArray;
console.log(location);