const src = "send an $$$email$$$, yes $$$grinning$$$";

const d1 = [...src.matchAll(/(\${3}[^$]+\${3})/g)];
console.log(d1);

const dst = src.replaceAll(/(\${3}[^$]+\${3})/g, (e) => {
  console.log(e);
  return e;
});

console.log(dst);
