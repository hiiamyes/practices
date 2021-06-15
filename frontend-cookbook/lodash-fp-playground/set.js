const { set } = require("lodash/fp");

const a = {};
console.log(
  JSON.stringify(set("pages.tutors.how_to_use.1.title", "123", a), null, 2),
);
