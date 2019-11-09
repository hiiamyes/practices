// require("dotenv").config();
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

(async () => {
  //   const d = await calendar.calendarList.list();
  //   const r = await calendar.calendars.get({ calendarId: "joshuayes@gmail.com" });
  const { data: events } = await calendar.events.list({
    calendarId: "joshuayes@gmail.com",
    timeMin: new Date("2019-11-01").toISOString(),
    timeMax: new Date("2019-11-30").toISOString()
  });
  console.log(events);
})();
