const { orderBy } = require("lodash/fp");
const discounts = [
  {
    expiresAt: "2021-05-26T12:45:39+08:00",
  },
  {
    expiresAt: "2021-05-22T16:11:27+08:00",
  },
  {
    expiresAt: "2021-05-22T16:01:27+08:00",
  },
];

console.log(orderBy("expiresAt", "asc", discounts));

const discounts2 = [
  {
    expiresAt: "2021-05-26T12:45:39+08:00",
  },
  {
    expiresAt: null,
  },
  {
    expiresAt: "2021-05-22T16:01:27+08:00",
  },
];

console.log(orderBy("expiresAt", "asc", discounts2));
