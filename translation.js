const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: ""
});

async function main() {
  const transcription = await openai.audio.translations.create({
    file: fs.createReadStream("2.mp3"),
    model: "whisper-1"
  });

  console.log(transcription.text);
}

main();
