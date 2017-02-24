/* 
Activité : jeu de devinette
*/
console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

console.log("(La solution est " + solution + ")");

var saisie
var nbTour = 1
for (saisie = prompt("Saisissez un nombre entre 1 et 100") ; (solution != saisie) && (nbTour < 6) ; nbTour++){
    
        //Placement des limites entre 1 et 100 + reprise du jeu
    if ((saisie < 1) || (saisie > 100)){
        alert("Votre nombre n'est pas entre 1 et 100 !")
        console.log("Votre nombre n'est pas entre 1 et 100 !")
        var saisie = prompt("Saisissez un nombre entre 1 et 100")
    }
    
    //Indication que la saisie est supérieure à la solution + reprise
        else if(saisie > solution){
            alert(saisie + " est trop grand !")
            console.log(saisie + " est trop grand !")
            var saisie = prompt("Saisissez un nombre entre 1 et 100")
        }
    //Indication que la saisie est inférieure à la solution + reprise
            else if (saisie < solution){
                alert(saisie + " est trop petit !")
                console.log(saisie + " est trop petit !")
                var saisie = prompt("Saisissez un nombre entre 1 et 100")
            }
} 
// Fin de boucle, si le nombre de tour est de 6 alors perdu
if (nbTour === 6){
    alert("Perdu ! Vous n'avez plus de tours.")
    console.log("Perdu ! Vous n'avez plus de tours.")
}

// Si le nombre de tour est inférieur à 6 et que la boucle est finie alors gagné

    else {
        alert("Bravo ! Vous avez réussi en " + nbTour + " essai(s)")
        console.log("Bravo ! Vous avez réussi en " + nbTour + " essai(s)")
    }
    
