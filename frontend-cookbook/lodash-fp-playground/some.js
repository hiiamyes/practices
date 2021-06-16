const { includes, pick, some } = require("lodash/fp");

const paths = ["/nodes", "/paths", "/m/nodes"];

console.log(some(includes("/nodes/123"))(paths));
console.log(some(includes("/nodes/123"), paths));
console.log(
  some((qq) => {
    console.log(qq);
    return includes(qq, "/nodes/123");
  }, paths),
);
console.log(some(includes("/nodesq"), paths));
console.log(some(includes("/m/nodes"), paths));

const pb = { a: 1, b: 2 };
console.log(some(Boolean, pick(["a"], pb)));
console.log(some(Boolean, pick(["a", "c"], pb)));
console.log(some(Boolean, pick(["b", "c"], pb)));
console.log(some(Boolean, pick(["c"], pb)));
