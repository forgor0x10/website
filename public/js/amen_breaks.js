const audioFiles = [
  "cw_amen01_175.wav",
  "cw_amen02_165.wav",
  "cw_amen03_167.wav",
  "cw_amen04_170.wav",
  "cw_amen05_158.wav",
  "cw_amen06_169.wav",
  "cw_amen07_172.wav",
  "cw_amen08_165.wav",
  "cw_amen09_175.wav",
  "cw_amen10_135.wav",
  "cw_amen11_145.wav",
  "cw_amen12_137.wav",
  "cw_amen13_173.wav",
  "cw_amen14_175.wav",
  "cw_amen15_174.wav",
  "cw_amen16_167.wav",
  "cw_amen17_175.wav",
  "cw_amen18_178.wav",
  "cw_amen19_172.wav",
  "cw_amen20_164.wav",
];

const audioElement = document.getElementById("amen-break-audio");
const messageElement = document.getElementById("amen-break-message-p");
const playElement = document.getElementById("amen-break-play-button");

playElement.addEventListener("click", () => {
  const index = Math.floor(Math.random() * audioFiles.length);
  const file = audioFiles[index];
  const src = "/sound/amen_breaks/" + file;

  audioElement.src = src;
  audioElement.controls = true;
  audioElement.autoplay = true;

  let message = "";

  if (index === 1) message = "This is so szamar madar";
  else if (index === 3) message = "This is so deep blue";
  else if (index === 4) message = "This is so into the fire";
  else if (index === 8) message = "This is so jungle";
  else if (index === 12) message = "This is so death odyssey";
  else if (index === 14) message = "This is so unstoppable force";

  messageElement.innerHTML = `Congratulations!! You got <strong>${file}</strong>!!<br />${message}`;
});
