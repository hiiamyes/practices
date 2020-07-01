const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi, no cors.");
});

app.listen(3001);
