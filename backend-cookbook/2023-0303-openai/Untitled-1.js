const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = (event) =>
  console.log("Speech recognition result: ", event.results[0][0].transcript);
const mediaStreamConstraints = { audio: true };
let mediaRecorder;

navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then((stream) => {
    mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];
    mediaRecorder.mimeTypes = ["audio/webm; codecs=opus"];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });
    mediaRecorder.addEventListener("stop", () => {
      console.log("stop");
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio();
      audio.src = audioUrl;
      audio.play();
    });
  })
  .catch((error) => {
    console.error("Error accessing microphone:", error);
  });

recognition.start();
mediaRecorder.start();

recognition.stop();
mediaRecorder.stop();
