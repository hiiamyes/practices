const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("pongg");
});

app.listen(process.env.PORT, () =>
  console.log(`API server starts at ${process.env.PORT}`)
);
