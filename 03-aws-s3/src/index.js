require("dotenv").config();
const AWS = require("aws-sdk");
let s3 = new AWS.S3({
  apiVersion: "2006-03-01"
});
var params = {
  Bucket: "practice-03",
  Key: "test.jpg",
  Expires: 180,
  ACL: "public-read",
  ContentType: "image/jpeg"
};
var url = s3.getSignedUrl("putObject", params);
console.log(url);

// s3.getSignedUrl("putObject", params, function(err, url) {
//   console.log("The put URL is", url);
// });
