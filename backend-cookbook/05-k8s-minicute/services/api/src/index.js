const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json("pong");
});

app.listen(process.env.PORT, () => console.log(`API server starts`));
