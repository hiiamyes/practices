const { some, includes } = require("lodash/fp");

const paths = ["/nodes", "/paths", "/m/nodes"];

console.log(some(includes("/nodes/123"), paths));
console.log(
  some((qq) => {
    console.log(qq);
    return includes(qq, "/nodes/123");
  }, paths),
);
console.log(some(includes("/nodesq"), paths));
console.log(some(includes("/m/nodes"), paths));
