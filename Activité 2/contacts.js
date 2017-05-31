/**
 * Created by Anthony on 31/05/2017.
 */

console.log("Bienvenue dans le gestionnaire de contacts");

//DESCRIPTION
var contacts = [];
var contact = {
    init : function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire : function (){
        var description =  "Nom: " + this.nom + ", prenom : " + this.prenom
        return description
    }

}

var contact1 = Object.create(contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

contacts.push(contact1);
contacts.push(contact2);

//Menu
var choix = "";
while (choix != 0){
    choix = prompt("Choissisez une option");
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");

    //Choix
    if (choix = 1){
        contacts.forEach(function (contact){
            console.log(contact.decrire());
        })
    }else if (choix = 2){
        console.log("Pour ajouter un contact entrez le nom et le prénom.");
        var ajoutNom = prompt("Ajoutez le nom du contact");
        var ajoutPrenom = prompt("Ajoutez le prénom de contact");
        contact.init(ajoutNom, ajoutPrenom)
        contacts.push(contact)
    }

}

console.log("Au revoir !")





