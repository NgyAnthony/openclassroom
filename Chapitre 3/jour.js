var saisieJour = prompt("Quel jour sommes-nous aujourd'hui ?")
switch (saisieJour) 
{
    case "Lundi" :
        console.log("Demain sera mardi.")
        break;
    case "Mardi" :
        console.log("Demain sera mercredi.")
        break;
    case "Mercredi" :
        console.log("Demain sera jeudi.")
        break;
    case "Jeudi" :
        console.log("Demain sera vendredi.")
        break;
    case "Vendredi" :
        console.log("Demain sera samedi.")
        break;
    case "Samedi" :
        console.log("Demain sera dimanche.")
        break;
    case "Dimanche" :
        console.log("Demain sera lundi.")
        break;
    default :
        console.log("Je ne connais pas ce jour !")
        
}