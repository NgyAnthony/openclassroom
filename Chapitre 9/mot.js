/**
 * Created by Anthony on 31/05/2017.
 */

/* saisie de mots push dans un tableau, if stop, console log tableau, */

var mots = [];
var mot = "";
while(mot !== "stop")   {
    mot = prompt("Saisissez un mot, stop pour arrêter.");
    if (mot !== "stop"){
        mots.push(mot);
    }
}

mots.forEach(function (mot) {
    console.log(mot);
});



