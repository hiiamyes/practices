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

    const {
      data: { email, id: google_open_id }
    } = await oauth2.userinfo.v2.me.get({
      auth: oAuth2Client
    });
    const { rows } = await client.query(
      `
    insert into 
      user (email, google_open_id) 
      values ($1, $2) 
      on conflict (google_open_id) 
      do update set email=$1 
      returning *`,
      [email, google_open_id]
    );
    const user = rows[0];

    res.json({ user });
  } catch (error) {
    res.json(`error: ${error}`);
  }
});

app.listen(port);
