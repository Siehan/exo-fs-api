/*
wc.js 2

Améliorer l'exercice précédent en ajoutant la possibilité de passer des paramètres optionnels: -l: pour afficher le nombre de lignes uniquement.
-w: pour afficher le nombre de mots uniquement.
-c: pour afficher le nombre de caractères uniquement.
Pour simplifier l'exercice nous supposerons que seulement 1 seul paramètres optionnel peut être passé en même temps.

node wc.js file.txt
279    1211   13376 file.txt
node wc.js -l file.txt
279 file.txt
node wc.js -w file.txt
1211 file.txt
node wc.js -c file.txt
13376 file.txt
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si le paramètre optionnel passé n'existe pas.
Gestion l'erreur si file.txt n'existe pas.
*/
