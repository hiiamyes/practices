const a = class {
  constructor() {
    console.log("neeeew");
  }
  test() {
    console.log("test");
  }
  static testb() {
    console.log("testb");
  }
};

console.log(new a());
console.log(a.testb());
console.log(a.test());
