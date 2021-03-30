/*
wc.js 1

node wc.js file.txt 279 1211 13376 file.txt
Affiche le nombre de lignes, mots et caractères du fichier file.txt.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion l'erreur si file.txt n'existe pas.
*/

const chalk = require("chalk");
const fs = require("fs");

// 1 - check the cmd line
if (process.argv.length !== 3) {
  console.log(chalk.yellow("node wc.js file.txt"));
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
} else {
  const contentFileLines = fs.readFileSync("file.txt", "utf-8");
  const contentFileWords = fs.readFileSync("file.txt", "utf-8");
  const contentFileChar = fs.readFileSync("file.txt", "utf-8");
  const lines = contentFileLines.split("\n"); // lines : 17
  const words = contentFileWords.split(" "); // words : 122
  const characters = contentFileChar.length; // words : 145

  console.log(
    chalk.yellow(
      `Total number of lines: ${lines.length}, words: ${words.length}, characters: ${characters} on file.txt`
    )
  );
  // OR LINE AFTER LINE
  console.log(chalk.green(`Total number of lines: ${lines.length}`));
  console.log(chalk.blue(`Total number of words: ${words.length}`));
  console.log(chalk.magenta(`Total number of characters: ${characters}`));
  //console.log(chalk.yellow(`Total number of characters: ${stats.size}`); // 695
}

/*
OUTPUT :
➜  exo-fs-api git:(main) ✗ node wc.js file.txt
Total number of lines: 17, words: 112, characters: 645 on file.txt (chalk yellow)
Total number of lines: 17 (chalk green)
Total number of words: 112 (chalk blue)
Total number of characters: 645 (chalk magenta)
*/
