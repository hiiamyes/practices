const express = require("express");
const app = express();
console.log(process.env.FOO);

app.get("/", (req, res) => {
  res.json("pongggg");
});

app.listen(process.env.PORT, () =>
  console.log(`API server starts at ${process.env.PORT}`)
);
