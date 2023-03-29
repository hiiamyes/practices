const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const axios = require("axios");

(async () => {
  const create = async (i) => {
    const words = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "words.json")),
    );
    const word = words[i * 10 + 3];
    const question = JSON.parse(
      (
        await axios({
          method: "POST",
          url: "https://api.openai.com/v1/chat/completions",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_TOKEN}`,
          },
          data: {
            model: "gpt-3.5-turbo",
            temperature: 0,
            messages: [
              {
                role: "user",
                content: `
Give me a single select question with 4 options to test if I know the Japanese word "${word.word}" well.
First option is the correct answer.
Answer in zh-TW.
`,
              },
              {
                role: "user",
                content: `
return a JSON in the format 
{
  question: "",
  options: ["","","",""]
}`,
              },
            ],
          },
        })
      ).data.choices[0].message.content,
    );
    console.log({ ...word, ...question });
    fs.appendFileSync(
      path.resolve(__dirname, "questions.json"),
      JSON.stringify({ ...word, ...question }),
    );
  };
  let i = 0;
  while (i < 40) {
    await create(i);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    i++;
  }
})();
