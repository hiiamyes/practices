require("dotenv").config();

// connect to postgresql
const { Client } = require("pg");
const client = new Client();

console.log("connecting...");

client.connect();

client.query("SELECT $1::text as message", ["Hello world!"], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  client.end();
});

// db migration

// create user api
