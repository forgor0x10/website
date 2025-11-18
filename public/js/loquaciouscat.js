const data = [
  [
    "one",
    "two yards of",
    "three yards of",
    "lots and lots of",
    "a bagful of",
    "a handful of",
    "a single",
    "a small pile of",
  ],
  [
    "white",
    "thick",
    "little",
    "rusty",
    "big",
    "beautiful",
    "small",
    "wooden",
    "soft",
    "torn",
    "heavy",
    "tiny",
  ],
  [
    "cotton",
    "pins",
    "needle",
    "pair of scissors",
    "leather",
    "table",
    "buttons",
    "fabric",
  ],
];

document.addEventListener("DOMContentLoaded", () => {
  const messageEl = document.getElementById("message-p");
  const inputEl = document.getElementById("question-input");
  const submitButtonEl = document.getElementById("submit-button");

  submitButtonEl.addEventListener("click", async () => {
    const input = inputEl.value;
    inputEl.value = "";

    if (!input) {
      return;
    }

    let message = "";

    [0, 1, 1, 2].forEach((i) => {
      const j = Math.floor(Math.random() * data[i].length);
      message += data[i][j] + " ";
    });

    message = message.trim();

    messageEl.textContent = "";
    let index = 0;

    while (index < message.length) {
      messageEl.textContent += message[index].toUpperCase();
      index += 1;

      if (Math.random() < 0.1) {
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
      }

      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
    }
  });
});
