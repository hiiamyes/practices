const { getOr } = require("lodash/fp");

const a = null;
console.log(getOr(0, "1", a));

const b = [-1];
console.log(getOr(0, "1", b));

const c = [-1, "2"];
console.log(+getOr(0, "1", c));
