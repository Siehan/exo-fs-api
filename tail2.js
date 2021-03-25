/*
tail.js 2

Améliorer le programme précédent pour prendre en compte le paramètre optionnel -n. Par défaut tail affiche les 10 dernières ligne du fichier passé en paramètres, -n permet d'indiquer le nombre de dernières lignes à afficher:

node tail.js -n 20 file.txt
Affiche les 20 dernières lignes du fichier file.txt.
Attention -n suivi d'un nombre est optionnel, ne pas l'utiliser doit exécuter un affichage des 10 dernières ligne du fichier par défaut.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas.
Gestion de l'erreur si un mauvais argument optionnel est passé.
Gestion de l'erreur si le nombre ligne passé en arguments n'est pas convertible en nombre.
*/
