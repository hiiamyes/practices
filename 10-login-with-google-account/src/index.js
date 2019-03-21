/**
 * Google API Console setting
 */
require("dotenv").config();
const { getAuthUrl, getUser } = require("./googleAPIUtils");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  const authUrl = getAuthUrl();
  res.send(`<a href=${authUrl}>Sign in</a>`);
});

app.get("/signin", async (req, res) => {
  try {
    const { code } = req.query;
    const user = await getUser(code);
    res.json({ user });
  } catch (error) {
    res.json(`error: ${error}`);
  }
});

app.listen(port);
