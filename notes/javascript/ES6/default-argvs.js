function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 9999999;
}
//added default value
function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
}
// non default arguments approach
// let test = createAdminUser(new User(generateId()));
let test = createAdminUser();
console.log(test);