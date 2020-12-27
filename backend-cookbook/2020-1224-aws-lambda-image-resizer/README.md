# Lambda + S3

- [serverless-s3-local](https://github.com/ar90n/serverless-s3-local)
- [serverless-offline](https://github.com/dherault/serverless-offline)

## Getting started

```
yarn
yarn run package
yarn run invoke:local
yarn run dev
aws --endpoint http://localhost:4569 s3 cp ./image.jpg s3://2020-1224-aws-lambda-image-resizer/image.jpg --profile s3local
```

## Deployment

```
yarn run deploy
```

## Production test

```
yarn run logs
aws s3 cp ./image.jpg s3://2020-1224-aws-lambda-image-resizer/image.jpg --profile yeeeeees
```

## Reference

https://www.serverless.com/blog/dynamic-image-resizing-nodejs

- [serverless](https://github.com/serverless/serverless)
- [cloudwatch event](https://www.serverless.com/framework/docs/providers/aws/events/cloudwatch-event/)
- [google api service account](https://cloud.google.com/docs/authentication/production)
- [google calendar api](https://developers.google.com/calendar/v3/reference)

https://aws.amazon.com/tw/blogs/compute/resize-images-on-the-fly-with-amazon-s3-aws-lambda-and-amazon-api-gateway/

## Error running Sharp inside AWS Lambda function: darwin-x64' binaries cannot be used on the 'linux-x64' platform

'darwin-x64' binaries cannot be used on the 'linux-x64' platform.

https://stackoverflow.com/questions/60181138/error-running-sharp-inside-aws-lambda-function-darwin-x64-binaries-cannot-be-u

```
npm install --arch=x64 --platform=linux sharp
```
