console.log ("Start")

for (var saisie = prompt("Tout va bien ?") ; (saisie !== "Oui") && (saisie !=="Non") ; )
    {
        saisie = prompt("Tout va bien ?")
    }
console.log("Perdu !");
console.log ("End")