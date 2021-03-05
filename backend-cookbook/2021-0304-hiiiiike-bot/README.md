# hiiiike bot

## Getting started

```
cp .env.template .env
vim .env
```

```
yarn
yarn dev
```

```
curl http://localhost:3000/dev/weather
```

## Deployment

```
yarn deploy
```

## Production test

```
yarn run logs
aws s3 cp ./image.jpg s3://image-resizer/originals/image.jpg --profile yeeeeees
```

## Reference

- [serverless](https://github.com/serverless/serverless)
- [yes-weather](https://glitch.com/edit/#!/yes-weather?path=README.md%3A1%3A0)