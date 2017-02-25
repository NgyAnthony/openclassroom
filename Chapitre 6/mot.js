var mot = prompt("Saisissez un mot")
console.log("Le mot " + mot + " contient " + mot.length + " caractères")
console.log("Il s'écrit en minuscule " + mot.toLowerCase())
console.log("Il s'écrit en majuscule " + mot.toUpperCase()) 


// Renvoie le nombre de voyelles d'un mot
function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }

    }
    return nbVoyelles;
    
}

var nbVoyelles = compterNbVoyelles(mot)
var nbConsonne = mot.length - nbVoyelles

console.log("Il y a " + compterNbVoyelles(mot) + " voyelle(s) et " + nbConsonne + " consonne(s)." )
