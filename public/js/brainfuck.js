document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("brainfuck-input-textarea");

  inputElement.value =
    ">+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.++++\n" +
    "+++..+++.>>>++++++++[<++++>-]<.>>>++++++++++[<+++\n" +
    "++++++>-]<---.<<<<.+++.------.--------.>>+.>+++++\n" +
    "+++++.";
});

document
  .getElementById("brainfuck-run-button")
  .addEventListener("click", async () => {
    const outputElement = document.getElementById("brainfuck-output-p");
    const inputElement = document.getElementById("brainfuck-input-textarea");
    const statsElement = document.getElementById("brainfuck-stats-p");

    outputElement.textContent = "...";
    const code = inputElement.value;

    let ram = new Array(64).fill(0);
    let ptr = 0;
    let ip = 0;
    let loopStack = [];
    let output = "";

    while (ip < code.length) {
      await new Promise((resolve) => setTimeout(resolve, 0));

      const loopStackString =
        "[" + [...new Set(loopStack)].toString().replace(/,/g, ", ") + "]";

      statsElement.innerHTML =
        `ip = ${String(ip).padStart(4, "0")}<br />` +
        `code[ip] = ${code[ip]}<br />` +
        `ptr = ${ptr}<br />` +
        `ram[ptr] = ${String(ram[ptr]).padStart(3, "0")}<br />` +
        `loopStack[] = ${loopStackString}`;

      switch (code[ip]) {
        case ">":
          ptr++;
          break;
        case "<":
          ptr--;
          break;
        case "+":
          ram[ptr] = (ram[ptr] + 1) & 255;
          break;
        case "-":
          ram[ptr] = (ram[ptr] - 1) & 255;
          break;
        case ".":
          output += String.fromCharCode(ram[ptr]);
          break;
        case "[":
          loopStack.push(ip);
          break;
        case "]":
          if (ram[ptr] !== 0) {
            ip = loopStack[loopStack.length - 1];
            continue;
          } else {
            loopStack.pop();
          }

          break;
      }

      let char =
        ram[ptr] >= 32 && ram[ptr] <= 126 ? String.fromCharCode(ram[ptr]) : "";
      let text = output + char;
      outputElement.textContent = text !== "" ? text : "\u00a0";

      ip++;
    }

    outputElement.textContent = output || "(None)";
  });
