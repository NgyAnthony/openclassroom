/*var perso = {
    nom : "Aurora",
    sante : 150,
    force: 25,
    xp : 30,
    //Renvoie la desciption d'un personnage
    decrire : function(){
        var description = this.nom + " a " + this.sante + " points de vie " +
            this.force + " en force et " + this.xp + " points d'expérience.";
        return description
    }
};

console.log(perso.decrire());

perso.sante = perso.sante - 50;
perso.force = perso.force + 5;
perso.xp = perso.xp + 20;

console.log(perso.decrire());

var perso2 = {
    nom : "Glacius",
    sante : 500,
    force : 50,
    xp : 190

} Version sans prototype*/


/*var Personnage = {
    nom : "",
    sante : 0,
    xp: 0,
    force : 0,

    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie " + this.force
        + " en force et " + this.xp + " points d'expérience.";
        return description;
    }
};

var perso1 = Object.create(Personnage)
perso1.nom = "Grim"
perso1.xp = 5000
perso1.force = 1500
perso1.sante = 2500

var perso2 = Object.create(Personnage)
perso2.nom = "Hibiki"
perso2.xp = 5000
perso2.force = 750
perso2.sante = 1500

console.log(perso1.decrire());
console.log(perso2.decrire()); Version prototype */


var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },


    // Attaque un personnage cible
    attaquer: function (cible) {
    if (this.sante > 0) {
        var degats = this.force;
        console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
        cible.sante = cible.sante - degats;
        if (cible.sante > 0) {
            console.log(cible.nom + " a encore " + cible.sante + " points de vie");
        } else {
            cible.sante = 0;
            console.log(cible.nom + " est mort !");
        }
    } else {
        console.log(this.nom + " ne peut pas attaquer : il est mort...");
    }
}
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

Joueur.combattre = function(adversaire){
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'expérience");
        this.xp += adversaire.valeur
    }
};


var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Hibiki", 1500, 250);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Grim", 7800, 930);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};
var monstre = Object.create(Adversaire);
monstre.initAdversaire("Zog",500,200,"Demon",40);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());



