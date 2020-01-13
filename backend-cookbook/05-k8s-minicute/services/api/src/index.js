const express = require("express");
const app = express();
app.get("/ping", (req, res) => {
  res("pong");
});

app.listen(3000, () => console.log(`API server starts`));
