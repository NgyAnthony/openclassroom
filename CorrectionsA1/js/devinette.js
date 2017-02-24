/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var nombre = Number(prompt("Choisissez un nombre entre 1 et 100 :"));
for (i = 1; i <= 5; i++) {
    if ((nombre > 100) || (nombre < 1)) {
        console.log(nombre + " n'est pas compris entre 0 et 100.");
        nombre = Number(prompt("Choisissez un nombre entre 1 et 100 :"));
    } else if (nombre === solution) {
        console.log("Bravo ! La solution était " + solution);
        console.log("Vous avez trouvé en " + i + " essai(s).");
        break;
   } else if (nombre < solution) {
       console.log(nombre + " est trop petit.");
       nombre = Number(prompt("Choisissez un nombre entre 1 et 100 :"));
    } else if (nombre > solution) {
        console.log(nombre + " est trop grand.");
        nombre = Number(prompt("Choisissez un nombre entre 1 et 100 :"));
        }
    }
if (nombre !== solution){
    if ((nombre > 100) || (nombre < 1)) {
        console.log(nombre + " n'est pas compris entre 0 et 100.");
        console.log("Perdu... La solution était " + solution);
    } else {
        if (nombre === solution) {
            console.log("Bravo ! La solution était " + solution);
            console.log("Vous avez trouvé en " + i + " essai(s).");
        } else if (nombre > solution) {
            console.log(nombre + " est trop grand.");
            console.log("Perdu... La solution était " + solution);
        } else if (nombre < solution) {
            console.log(nombre + " est trop petit.");
            console.log("Perdu... La solution était " + solution);
        }
    }
}