# 08-nginx-cors-proxy

```
yarn add -g serve
yarn
node api.js
node api-cors.js
curl http://localhost:3001/
curl http://localhost:3002/
```

```
serve web
```

```
docker build -t nginx-cors-proxy nginx-cors-proxy/
docker run --rm -p 3003:3003 -p 3004:3004 --name nginx-cors-proxy nginx-cors-proxy
```
