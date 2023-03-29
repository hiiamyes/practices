const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");

const axios = require("axios");

(async () => {
  const create = async () => {
    // const words = parse(fs.readFileSync(path.resolve(__dirname, "words.json")), {
    //   columns: true,
    // });
    const words = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "words.json")),
    );
    // const {
    //   data: { records },
    // } = await axios({
    //   method: "GET",
    //   url: "https://api.airtable.com/v0/appgZMAf1Cy056FeT/tblB1clQaecNCzA5j",
    //   headers: {
    //     Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
    //   },
    //   params: {
    //     // pageSize: 3,
    //   },
    // });
    const newWords = JSON.parse(
      (
        await axios({
          method: "POST",
          url: "https://api.openai.com/v1/chat/completions",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_TOKEN}`,
          },
          data: {
            model: "gpt-3.5-turbo",
            messages: [
              { role: "user", content: `known words: ${words}` },
              {
                role: "user",
                content: `
another 10 Japanese N4 level words
in JSON format
array of object
[{
  level,
  word,
  reading,
  type,
  zh-TW,
}]
type in noun, verb, na-adj, i-adj, adv, others`,
              },
            ],
          },
        })
      ).data.choices[0].message.content,
    );
    // console.log(newWords);
    // const { data } = await axios({
    //   method: "POST",
    //   url: "https://api.airtable.com/v0/appgZMAf1Cy056FeT/tblB1clQaecNCzA5j",
    //   headers: {
    //     Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
    //   },
    //   data: {
    //     records: newWords.map((w) => ({ fields: w })),
    //   },
    // });
    fs.writeFileSync(
      path.resolve(__dirname, "words.json"),
      JSON.stringify([...words, ...newWords]),
      { flag: "w" },
    );
  };

  let i = 0;
  while (i < 40) {
    console.log(i);
    await create();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    i++;
  }
})();
