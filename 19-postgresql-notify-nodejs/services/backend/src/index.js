const pg = require("pg");
// const pool = new Pool();
// const client = await pool.connect();
const client = new pg.Client();
client.connect();

client.query("LISTEN foo");
client.on("notification", async msg => {
  console.log(msg.channel); // foo
  console.log(msg.payload); // bar!
  const { rows } = await client.query("select count(*) from logs");
  console.log(rows[0]);
});
client.query(`NOTIFY foo, 'bar!'`);

const log = async () => {
  try {
    await client.query("select 1 from logs");
  } catch (error) {
    await client.query("create table logs (id serial primary key)");
  }
  try {
    await client.query("insert into logs default values");
    await client.query(`NOTIFY foo, 'bar!'`);
  } catch (error) {}
  setTimeout(log, 2000);
};

log();
