const { google } = require("googleapis");
const fs = require("fs");
const readline = require("readline");

const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const TOKEN_PATH = "token.json";

const { client_secret, client_id, redirect_uris } = JSON.parse(
  fs.readFileSync("credentials.json")
).installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES
});
console.log("Authorize this app by visiting this url:", authUrl);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter the code from that page here: ", code => {
  rl.close();
  oAuth2Client.getToken(code, (err, token) => {
    if (err)
      return console.error("Error while trying to retrieve access token", err);
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
      if (err) return console.error(err);
      console.log("Token stored to", TOKEN_PATH);
    });
  });
});
