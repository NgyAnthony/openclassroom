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
        var description =  "Nom: " + this.nom + ", prenom : " + this.prenom;
        return description
    },

    ajout : function(){
        console.log("Pour ajouter un contact entrez le nom et le prénom.");
        var ajoutNom = prompt("Ajoutez le nom du contact");
        var ajoutPrenom = prompt("Ajoutez le prénom de contact");
        contact.init(ajoutNom, ajoutPrenom);
        contacts.push(contact);
        console.log("Le contact à bien été ajouté.")
    }

};

var contact1 = Object.create(contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

contacts.push(contact1);
contacts.push(contact2);


//Menu
var choix = "";
while (choix !== "0"){
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    choix = prompt("Choissisez une option");

    if (choix = "1"){
        contacts.forEach(function (contact){
            console.log(contact.decrire());
        })
    }else if (choix = "2"){
        contact.ajout();
    }else {
        console.log("Cette valeur m'est inconnue...")
    }
}

console.log("Au revoir !");

/* problème : while exécute le choix 1 tout le temps peu importe le choix...*/