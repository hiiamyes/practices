const { google } = require("googleapis");

const googleConfig = {
  clientId: process.env.GOOGLE_API_CLIENT_ID,
  clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,
  redirect: process.env.GOOGLE_API_REDIRECT
};

const oAuth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);

const people = google.people({
  version: "v1",
  auth: oAuth2Client
});

const defaultScope = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile"
];

function getAuthUrl() {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    // scope: "openid email profile"
    scope: defaultScope.join(" ")
  });
}

async function getUser(code) {
  try {
    console.log("====================================");
    console.log("qq", code);
    console.log("====================================");
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    const res = await people.people.get({
      resourceName: "people/me",
      personFields: "emailAddresses,names,photos"
    });
    console.log("====================================");
    console.log(res);
    console.log("====================================");
    // console.log("====================================");
    // console.log(tokens, res);
    // console.log("====================================");
    // return { tokens };
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
    return "success";
    // return res.data;
  } catch (error) {
    console.log("====================================");
    console.log("gerUser failed: ", error.config.body);
    console.log("====================================");
    return error;
  }
}

module.exports = { getAuthUrl, getUser };
