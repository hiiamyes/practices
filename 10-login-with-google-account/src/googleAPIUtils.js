const { google } = require("googleapis");

const googleConfig = {
  clientId: process.env.GOOGLE_API_CLIENT_ID,
  clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,
  redirect: process.env.GOOGLE_API_REDIRECT
};
const defaultScope = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile"
];

function getAuth() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}

function getAuthUrl(oauth2Client) {
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: defaultScope
  });
}

async function getUser(code) {
  try {
    const oauth2Client = getAuth();
    console.log("====================================");
    console.log("qq");
    console.log("====================================");
    const { tokens } = await oauth2Client.getToken(code);
    return { tokens };
    // oauth2Client.setCredentials(tokens);
    // const plus = getGooglePlusApi(oauth2Client);
    // const me = await plus.people.get({ userId: "me" });
    // const userGoogleId = me.data.id;
    // const userGoogleEmail =
    //   me.data.emails && me.data.emails.length && me.data.emails[0].value;
    // return {
    //   id: userGoogleId,
    //   email: userGoogleEmail,
    //   tokens
    // };
  } catch (error) {
    console.log("====================================");
    console.log("gerUser failed: ");
    console.log("====================================");
    return error;
  }
}

module.exports = { getAuth, getAuthUrl, getUser };
