"use strict";

const aws = require("aws-sdk");
const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  s3ForcePathStyle: true,

  accessKeyId: "S3RVER", // This specific key is required when working offline
  secretAccessKey: "S3RVER",
  endpoint: new aws.Endpoint("http://localhost:4569"),
});
// const sharp = require("sharp");
const jimp = require("jimp");
/**
 *
 * @param {s3 event} event
 * https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html
 */
module.exports.resize = async (event, context) => {
  try {
    // console.log(event);
    // console.log(context);
    // console.log(event.Records[0].s3.object);
    const bucket = event.Records[0].s3.bucket;
    const object = event.Records[0].s3.object;
    // get object
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
    const srcImage = await s3
      .getObject({
        Bucket: bucket.name,
        Key: object.key,
      })
      .promise();
    // console.log("src: ", srcImage);
    let destImage = await jimp.read(srcImage.Body);
    await destImage.resize(320, jimp.AUTO);
    // const destImage = await sharp(srcImage.Body)
    //   .resize({ width: 320 })
    //   .toBuffer();
    // put object
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
    destImage = await destImage.getBufferAsync(jimp.MIME_JPEG);
    console.log("dest: ", destImage);
    await s3
      .putObject({
        Body: destImage,
        Bucket: "2020-1224-aws-lambda-image-resizer-resize-images",
        Key: `${object.key.split(".")[0]}-w300.${object.key.split(".")[1]}`,
      })
      .promise();
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
