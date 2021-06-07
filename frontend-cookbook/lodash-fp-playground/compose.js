const { compose, zipObject, zipObj } = require("lodash/fp");

const a = ["a", "b"];
const b = [
  { a1: 1, a2: 2 },
  { b1: 1, b2: 2 },
];
const c = compose(zipObject(a))(b);

console.log(c);

const d = compose(zipObj(a))(b);

console.log(d);
