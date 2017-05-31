/**
 * Created by Anthony on 31/05/2017.
 */

/*
 Exercice : maximum d'un tableau
 */

var valeurs = [11, 390, 7, 2, 9, 10];

var max = valeurs[0];
// L'indice commence à 1 puisque le maximum est initialisé avec la 1ère valeur du tableau
for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
        console.log(valeurs[i])
    }
}
console.log("Le maximum des éléments vaut " + max);

console.log(valeurs[1]);

