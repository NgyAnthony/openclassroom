var moyenne = prompt("Entrez la moyenne de votre bac :")
if (moyenne < 10)
    {
        alert("Bravo ! Vous pouvez postuler chez pole emploi immédiatement !")
    }
else 
    {
        if(moyenne >= 12)
           { 
                alert("Félicitations ! Vous avez reçu votre bac avec mention.")
           }
           else
            {
                alert("Vous avez votre bac sans mention, mais vous l'avez au moins.")
            }
    }