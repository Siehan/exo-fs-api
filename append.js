/*
append.js

node append.js src1.txt src2.txt src3.txt dst.txt

Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt

Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas.
*/

const chalk = require("chalk");
const fs = require("fs");

// 1 - check the cmd line
if (process.argv.length !== 6) {
  console.log(chalk.yellow("node append.js src1.txt src2.txt src3.txt dst.txt"));
  process.exit(1);
}

// 2 - check if the file exists
if (
  !fs.existsSync(process.argv[2]) ||
  !fs.existsSync(process.argv[3]) ||
  !fs.existsSync(process.argv[4])
  //!fs.existsSync(process.argv[5])
) {
  console.log(chalk.red("Error: file does not exist"));
  process.exit(1);
}

// 3 - check if it's a file
if (
  !fs.statSync(process.argv[2]).isFile() ||
  !fs.statSync(process.argv[3]).isFile() ||
  !fs.statSync(process.argv[4]).isFile()
) {
  console.log(chalk.red("Error: it is not a file"));
  process.exit(1);
}

// 4 - copy and read the file
fs.copyFile("src1.txt", "dst.txt", (err) => {
  if (err) return console.error(chalk.green("Error : the file could'nt be copied"));
  console.log(chalk.green("Copied Successfully!"));
  const src1 = fs.readFileSync(process.argv[2], "utf-8");
  console.log(chalk.green(src1));
});

fs.copyFile("src2.txt", "dst.txt", (err) => {
  if (err) return console.error(chalk.yellow("Error : the file could'nt be copied"));
  console.log(chalk.yellow("Copied Successfully!"));
  const src2 = fs.readFileSync(process.argv[3], "utf-8");
  console.log(chalk.yellow(src2));
});

fs.copyFile("src3.txt", "dst.txt", (err) => {
  if (err) return console.error(chalk.magenta("Error : the file could'nt be copied"));
  console.log(chalk.magenta("Copied Successfully!"));
  const src3 = fs.readFileSync(process.argv[4], "utf-8");
  console.log(chalk.magenta(src3));
});

//console.log(chalk.yellow(src1, src2, src3));

/*
OUTPUT :
➜  exo-fs-api git:(main) ✗ node append.js src1.txt src2.txt src3.txt dst.txt
Copied Successfully!
Je suis le fichier src1.txt (chalk green)
Copied Successfully!
Tu es le fichier src2.txt (chalk yellow)
Copied Successfully!
Il est le fichier src3.txt (chalk magenta)
➜  exo-fs-api git:(main) ✗
*/
