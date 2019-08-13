function helloWorld(user) {
    return "Hello, " + user.firstName + " " + user.lastName;
}
// let user = "yes";
var user = { firstName: "Yes", lastName: "Lee" };
console.log(helloWorld(user));
