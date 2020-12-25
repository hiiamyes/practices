# Lambda + S3

- [serverless-s3-local](https://github.com/ar90n/serverless-s3-local)
- [serverless-offline](https://github.com/dherault/serverless-offline)

## Getting started

```
yarn
aws --endpoint http://localhost:4569 s3 cp ./image.jpg s3://2020-1224-aws-lambda-image-resizer/image.jpg --profile s3local
yarn run package
yarn run invoke:local
yarn run dev
```

## Deployment

```
yarn run deploy
```

## Reference

- [serverless](https://github.com/serverless/serverless)
- [cloudwatch event](https://www.serverless.com/framework/docs/providers/aws/events/cloudwatch-event/)
- [google api service account](https://cloud.google.com/docs/authentication/production)
- [google calendar api](https://developers.google.com/calendar/v3/reference)

https://aws.amazon.com/tw/blogs/compute/resize-images-on-the-fly-with-amazon-s3-aws-lambda-and-amazon-api-gateway/
