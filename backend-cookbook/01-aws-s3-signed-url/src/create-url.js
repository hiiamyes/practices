require("dotenv").config();
const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  apiVersion: "2006-03-01"
});
var params = {
  Bucket: "practices-bc-01",
  Key: "test.jpg",
  ACL: "public-read",
  ContentType: "image/jpeg"
};
var url = s3.getSignedUrl("putObject", params);
fs.writeFileSync("src/url.txt", url);
