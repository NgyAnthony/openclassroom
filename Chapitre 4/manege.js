console.log("Program Start");
var manege = prompt("Entrez le tour actuel.")
if (manege >= 10)
    {
        console.log("Vous n'avez plus de tours !")
    }
while (manege <= 10){
    console.log("C'est le tour numéro " + manege);
    manege++;
}

console.log("Program End");