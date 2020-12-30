"use strict";
const aws = require("aws-sdk");
const jimp = require("jimp");
const s3 = new aws.S3(
  process.env.ENV === "production"
    ? {
        apiVersion: "2006-03-01",
      }
    : {
        apiVersion: "2006-03-01",
        accessKeyId: "S3RVER",
        secretAccessKey: "S3RVER",
        s3ForcePathStyle: true,
        endpoint: new aws.Endpoint("http://localhost:4569"),
      }
);
/**
 * @param {s3 event} event
 * https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html
 */
module.exports.resize = async (event, context) => {
  try {
    console.log("resize start");
    const bucket = event.Records[0].s3.bucket;
    const object = event.Records[0].s3.object;
    const [_match, _filePath, fileName, fileType] = /(.*\/)?(\w*).(\w*$)/g.exec(
      object.key
    );
    console.log("get object");
    const srcImage = await s3
      .getObject({
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
        Bucket: bucket.name,
        Key: object.key,
      })
      .promise();
    let destImage = await jimp.read(srcImage.Body);
    await destImage.resize(320, jimp.AUTO);
    destImage = await destImage.getBufferAsync(jimp.MIME_JPEG);
    console.log("put object");
    await s3
      .putObject({
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
        Body: destImage,
        Bucket: bucket.name,
        ContentType: srcImage.ContentType,
        Key: ["resizeds/", fileName, ".", fileType].join(""),
      })
      .promise();
    console.log("success");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go",
          input: event,
        },
        null,
        2
      ),
    };
  } catch (error) {
    console.log(error);
  }
};
