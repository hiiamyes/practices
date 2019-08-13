interface User {
  firstName: string;
  lastName: string;
}
function helloWorld(user: User) {
  return `Hello, ${user.firstName} ${user.lastName}.`;
}
let user = { firstName: "Yes", lastName: "Lee" };
console.log(helloWorld(user));
