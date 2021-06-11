const { replace } = require("lodash/fp");

const src = "send an $$$email$$$, yes $$$grinning$$$";

const dst = replace(
  /(\${3}[^$]+\${3})/g,
  (e) => {
    console.log(e);
    return e;
  },
  src,
);

console.log(dst);

console.log(replace(/\$/g, "q", "$$$"));
