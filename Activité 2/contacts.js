/** Created by Anthony on 31/05/2017.**/

//DESCRIPTION
var contacts = [];
var contact = {
    init : function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire : function (){
        var description =  "Nom: " + this.nom + ", prenom : " + this.prenom;
        return description;
    },

    ajout : function(){
        console.log("Pour ajouter un contact entrez le nom et le prénom.");
        var ajoutNom = prompt("Ajoutez le nom du contact");
        var ajoutPrenom = prompt("Ajoutez le prénom de contact");
        contact.init(ajoutNom, ajoutPrenom);
        contacts.push(contact);
        console.log("Le contact à bien été ajouté.");
    },
    menu : function () {
        console.log("1 : Lister les contacts");
        console.log("2 : Ajouter un contact");
        console.log("0 : Quitter");
    },
    multidecrire : function() {
        contacts.forEach(function (contact) {
            console.log(contact.decrire());
        });
    }

};

console.log("Bienvenue dans le gestionnaire de contacts");
contact.menu();

var contact1 = Object.create(contact);
contact1.init("Lévisse","Carole");
var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

contacts.push(contact1);
contacts.push(contact2);

var choix = "";

//Menu
while (choix !== "0") {
    choix = prompt("Choissisez une option");
    if (choix === "1") {
        contact.multidecrire();
        contact.menu();
    } else if (choix === "2") {
        contact.ajout();
        contact.menu();

    } else if (choix === "0") {
        console.log("Au revoir !");
    } else {
        console.log("Cette valeur m'est inconnue...");
        contact.menu();
    }
}