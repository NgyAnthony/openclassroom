/* 
Activité : jeu de devinette
*/
console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

console.log("(La solution est " + solution + ")");

var saisie = prompt("Saisissez un nombre entre 1 et 100")

while (solution != saisie){ // Si saisie !== solution alors fin de boucle
    
    //Placement des limites entre 1 et 100 + reprise du jeu
    if ((saisie < 1) || (saisie > 100)){
        alert("Votre nombre n'est pas entre 1 et 100 !")
        var saisie = prompt("Saisissez un nombre entre 1 et 100")
    }
    
    //Indication que la saisie est supérieure à la solution + reprise
        else if(saisie > solution){
            alert(saisie + " est trop grand !")
            var saisie = prompt("Saisissez un nombre entre 1 et 100")
        }
    //Indication que la saisie est inférieure à la solution + reprise
            else if (saisie < solution){
                alert(saisie + " est trop petit !")
                var saisie = prompt("Saisissez un nombre entre 1 et 100")
            }

} 
alert("Bravo! La solution était " + solution) 
