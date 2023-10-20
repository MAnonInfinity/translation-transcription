const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: ""
});

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("audio/subtraction.mp3"),
    model: "whisper-1",
    language: "en"
  });

  console.log(transcription.text);
}

main();
