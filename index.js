const prompt = require("prompt-sync")(); // Please don't touch me :)

let b1 = "1",
  b2 = "2",
  b3 = "3",
  b4 = "4",
  b5 = "5",
  b6 = "6",
  b7 = "7",
  b8 = "8",
  b9 = "9";

function printGrid() {
  console.log();
  console.log(` ${b1} | ${b2} | ${b3}  `);
  console.log("-----------");
  console.log(` ${b4} | ${b5} | ${b6}  `);
  console.log("-----------");
  console.log(` ${b7} | ${b8} | ${b9}  `);
  console.log();
}

let counter = 0;
function game() {
  console.log("\n\n");
  while (true) {
    if (counter == 9) {
      console.log("Game Over");
      break;
    }
    printGrid();
    const input = prompt("Type the number that will be replaced with X or O: ");
    if (input === ``) {
    }
    counter++;
  }
}

// ----- Write all function above this line
game();
