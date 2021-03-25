/*
cat.js
node cat.js file.txt
Affiche le contenu de file.txt sur l'écran. Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas.
*/

const chalk = require("chalk");
const fs = require("fs");

// check the cmd line
if (process.argv.length !== 3) {
  console.log(chalk.yellow("usage: node cat.js file.txt"));
  process.exit(1);
}

// check if the file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Error: "${process.argv[2]}" does not exist`));
  process.exit(1);
}

// check if it's a file
const stats = fs.statSync(process.argv[2]);
if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[2]} is not a file`));
  process.exit(1);
}

// check the reading of the file.
let text = fs.readFileSync(process.argv[2], "utf-8");
console.log(chalk.green(text));

/*
OUTPUT :

TEST 1 :
➜  exo-fs-api git:(main) ✗ node cat.js
usage: node cat.js file.txt (en jaune)

TEST 2 :
➜  exo-fs-api git:(main) ✗ node cat.js file
Error: "file.txt" does not exist (en rouge)

TEST 3 :
➜  exo-fs-api git:(main) ✗ node cat.js myDirectory
Error: myDirectory is not a file (en rouge)

TEST 4 :
➜  exo-fs-api git:(main) ✗ node cat.js cat.txt
cat.js (en vert)
node cat.js file.txt
Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas.
*/
