require("dotenv").config();

const redis = require("redis");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

redisClient = redis.createClient();
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const key = `users:${username}`;
  redisClient.hgetall(key, (err, user) => {
    if (user === null) {
      redisClient.hmset(key, {
        username,
        password
      });
      res.json({});
    } else {
      res.status(409);
      res.json({});
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const key = `users:${username}`;
  redisClient.hgetall(key, (err, user) => {
    if (user === null) {
      res.status(401);
      res.json({});
    } else {
      res.json({ message: `Hello ${username}.` });
    }
  });
});

app.listen(port);
