require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool();

console.log("====================================");
console.log("connecting...");
console.log("====================================");

// async/await - check out a client
(async () => {
  const client = await pool.connect();
  try {
    // const res = await client.query("SELECT * FROM users WHERE id = $1", [1]);
    // console.log(res.rows[0]);
    console.log("====================================");
    console.log("connect");
    console.log("====================================");
  } finally {
    client.release();
  }
})().catch(e => {
  //   process.exit();
  console.log("gg:", e.stack);
});
