require("dotenv").config();
const { google } = require("googleapis");
const fs = require("fs");

const TOKEN_PATH = "token.json";

const token = fs.readFileSync(TOKEN_PATH);
const { client_secret, client_id, redirect_uris } = JSON.parse(
  fs.readFileSync("credentials.json")
).installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);
oAuth2Client.setCredentials(JSON.parse(token));
const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/events", async (req, res) => {
  const { data: events } = await calendar.events.list({
    calendarId: "joshuayes@gmail.com",
    timeMin: new Date("2019-11-01").toISOString(),
    timeMax: new Date("2019-11-30").toISOString()
  });
  res.json(events);
});

app.get("/calendars", async (req, res) => {
  const { data: calendars } = await calendar.calendarList.list();
  res.json(calendars);
});

app.get("/calendar", async (req, res) => {
  const { data } = await calendar.calendars.get({
    calendarId: "joshuayes@gmail.com"
  });
  res.json(data);
});

app.get("/watch", (req, res) => {
  (async () => {
    try {
      const { data } = await calendar.events.watch({
        calendarId: "joshuayes@gmail.com",
        requestBody: {
          id: "01234567-89ab-cdef-0123456789ab",
          type: "web_hook",
          address: "https://98041173.ngrok.io/n"
        }
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })();
  res.json({});
});

app.post("/n", (req, res) => {
  console.log("nnn");
  res.json({});
});

app.listen(process.env.PORT, () =>
  console.log(`API server starts on port ${process.env.PORT}`)
);
