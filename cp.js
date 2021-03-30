/*
cp.js
node cp.js src.txt dst.txt
Copie src.txt vers dst.txt.
Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si src.txt n'existe pas.
*/

const chalk = require("chalk");
const fs = require("fs");

// 1 - check the cmd line
if (process.argv.length !== 4) {
  console.log(chalk.yellow("node cp.js src.txt dst.txt"));
  process.exit(1);
}

// 2 - check if the file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Error: "${process.argv[2]}" does not exist`));
  process.exit(1);
}

// 3 - check if it's a file
const stats = fs.statSync(process.argv[2]);
if (!stats.isFile()) {
  console.log(chalk.red(`Error: ${process.argv[2]} is not a file`));
  process.exit(1);
}

// 4 - copy the file
fs.copyFile("src.txt", "dst.txt", (err) => {
  if (err) return console.error(chalk.red("Error : the file could'nt be copied"));
  console.log(chalk.green("Copied Successfully!"));
});

// 5 - check the reading of the file.
let file = fs.readFileSync(process.argv[2], "utf-8");
console.log(chalk.magenta(file));

/*

OUTPUT :

TEST 1 (cmd line) :

➜  exo-fs-api git:(main) ✗ node cp.js src.txt
node cp.js src.txt dst.txt (en jaune)

TEST 2 (exist ?) :
➜  exo-fs-api git:(main) ✗ node cp.js src.txt dst.txt

Error: "src.txt" does not exist (rouge)

TEST 3 (copy & read the file):
➜  exo-fs-api git:(main) ✗ node cp.js src.txt dst.txt

Fichier src.txt  qui doit se copier dans dst.txt pour l'exercice cp.js (en magenta)
cp.js
node cp.js src.txt dst.txt
Copie src.txt vers dst.txt.
Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si src.txt n'existe pas.

Copied Successfully! (en vert)

*/
