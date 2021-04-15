const { some, includes } = require("lodash/fp");

const paths = ["/nodes", "/paths", "/m/nodes"];
const base = "/nodes";

console.log(some(includes('/nodes'), paths))
console.log(some(includes('/nodesq'), paths))
console.log(some(includes('/m/nodes'), paths))
