/**
 * Google API Console setting
 */
require("dotenv").config();
const { getAuth, getAuthUrl, getUser } = require("./googleAPIUtils");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  const auth = getAuth();
  const url = getAuthUrl(auth);
  res.json({ url });
});

app.get("/login", async (req, res) => {
  try {
    const { code } = req.query;
    const user = await getUser(code);
    res.json({ user });
  } catch (error) {
    res.json(`error: ${error}`);
  }
});

app.listen(port);
