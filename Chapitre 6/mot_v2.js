//Ecriture maj et min
var motSaisi = prompt("Saisissez un mot.");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

//Compter nb de voyelles et consonne
/*Comment compter le nombre de voyelles ?
on a : 
-> une fonction qui reprends le mot saisi et qui le met en low case
-> une variable qui définie nbVoyelles = 0
-> une variable qui dit que lettre = string dans motSaisi
-> une variable qui dit que si une lettre dans le mot saisi = à aeiouy alors
on ajoute 1 à nbVoyelles
-> on retourne a la fin le nombre de voyelle
-> on affiche le nombre de voyelle
*/

function compteVoyelles(motSaisi){
    var nbVoyelles = 0;
    for (var i = 0; i < motSaisi.length; i++) {
    var lettre = motSaisi[i].toLowerCase();
    if ((lettre === "a") || (lettre === "i") || (lettre === "u") ||
        (lettre === "e") || (lettre === "o") || (lettre === "y") ) 
        {
        nbVoyelles++
        }
    }
    return nbVoyelles;
}
var nbVoyelles = compteVoyelles(motSaisi);
var nbConsonnes = motSaisi.length - nbVoyelles
console.log("Il contient " + nbVoyelles + " et " + nbConsonnes +" consonne(s).");

//Ecrire le mot à l'envers

function inverser(motSaisi) {
    var motInverse = "";
    for (var i = 0 ; i < motSaisi.length; i++){
    motInverse = motSaisi[i] + motInverse;
    }
    return motInverse;
}
var motEnvers = inverser(motSaisi)
console.log("Il s'écrit à l'envers " + motEnvers)

//Palindrome
/*  Comment s'avoir si un mot dans un sens ou dans l'autre est le même ?
-> si la fonction inverser = à la fonction motSaisi alors il est le même
-> sinon ce n'est pas un palindrome */
function palindrome(motSaisi){
    if (motEnvers.toLowerCase === motSaisi.toLowerCase){
        console.log("Ce mot est un palindrome.")
    }
    else{
        console.log("Ce mot n'est pas un palindrome.")
    }
    return motSaisi
}
var palindrome = palindrome(motSaisi)

//leet speak
function convertirLettreLeet(motSaisi){
    var lettreLeet = "";
    for (var i = 0 ; i < motSaisi.length; i++){
        lettreLeet = lettreLeet + trouverLettreLeet(motSaisi[i]);
    }
    return lettreLeet
}
    
function trouverLettreLeet(lettre){
    var lettreLeet = lettre;
    switch(lettre.toLowerCase()/*<-NE PAS OUBLIER()*/){
        case "a" :
        lettreLeet = "4"
        break;
                case "b" :
        lettreLeet = "8"
        break;
                case "e" :
        lettreLeet = "3"
        break;
                case "l" :
        lettreLeet = "1"
        break;
                case "o" :
        lettreLeet = "0"
        break;
                case "s" :
        lettreLeet = "5"
        break;
            }
    return lettreLeet
        
}

var motLeetSpeak = convertirLettreLeet(motSaisi);
console.log("Il s'écrit en leet speak " + motLeetSpeak);
















