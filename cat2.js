/*
cat.js 2
Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

node cat.js file1.txt file2.txt file3.txt
Affiche le contenu de file1.txt, file2.txt, file3.txt à la suite sur l'écran.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers à afficher n'existe pas.
*/

const chalk = require("chalk");
const fs = require("fs");

// check the cmd line
if (process.argv.length !== 5) {
  console.log(chalk.yellow("usage: node cat2.js file1.txt file2.txt file3.txt"));
  process.exit(1);
}

// check if the files exists
if (!fs.existsSync(process.argv[2]) || !fs.existsSync(process.argv[3]) || !fs.existsSync(process.argv[4])) {
  console.log(chalk.red("Error: file does not exist"));
  process.exit(1);
}

// check if it's a file
if (
  !fs.statSync(process.argv[2]).isFile() ||
  !fs.statSync(process.argv[3]).isFile() ||
  !fs.statSync(process.argv[4]).isFile()
) {
  console.log(chalk.red("Error: it is not a file"));
  process.exit(1);
}

// check the reading of the file.
const file1 = fs.readFileSync(process.argv[2], "utf-8");
const file2 = fs.readFileSync(process.argv[3], "utf-8");
const file3 = fs.readFileSync(process.argv[4], "utf-8");
//console.log(chalk.green(file1, file2, file3));
console.log(chalk.green(file1));
console.log(chalk.yellow(file2));
console.log(chalk.magenta(file3));

/*

OUTPUT : ➜  exo-fs-api git:(main) ✗ node cat2.js file1.txt file2.txt file3.txt

FILE 1 (chalk green) :

UNE ECOLE AU CŒUR DE LA BLOCKCHAIN
Nous sommes passionné·e·s par la technologie,
et nous travaillons avec des passionné·e·s.
Nos formations sont données et créées par des expert·e·s du domaine à l’écoute et pédagogues.
Nous proposons actuellement le parcours « devenez développeur blockchain et smart contracts en 10 semaines » 
et le parcours de « chef de projet blockchain ».

FILE 2 (chalk yellow) :

UNE ECOLE OUVERTE A TOUTES ET TOUS
Nous croyons que nos formations doivent pouvoir bénéficier
à tous ceux et celles qui souhaitent apprendre et construire leur avenir professionnel.
Nous offrons plusieurs modalités de financement pour votre formation,
il y en a forcément une pour vous !
✅ Formation éligible CPF

FILE 3 (chalk green) :

APPRENDRE DES COMPETENCES, EN LIGNE ET/OU EN TELEPRESENTIEL
Nous sommes centrés sur l’apprentissage de compétences professionnelles :
il ne s’agit pas d’apprendre une encyclopédie par cœur,
mais d’être capable de réaliser des projets réels avec brio.
Et nos formations sont accessibles en ligne ou en téléprésentiel pour s’adapter à votre situation !
Nous proposons deux parcours:
“développeur·se ou chef·fe de projet blockchain”
Ces deux parcours sont disponibles sous deux formats. En téléprésentiel ou 100% à distance.

*/
