/**
 * Created by Anthony on 31/05/2017.
 */

console.log("Bienvenue dans le gestionnaire des contacts !");

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

contacts.forEach(function (contact){
    console.log(contact.decrire());
})

//ALGO CREATION
