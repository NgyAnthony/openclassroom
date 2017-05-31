/**
 * Created by Anthony on 31/05/2017.
 */

var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    aboyer: function() {
        var aboiement = "Whouha ! Whouha !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60){
            aboiement = "GRAHHHA! GLAAAAA!";
        }
        return aboiement;
    },
};

var Chiens = [];
var chien1 = Object.create(Chien);
chien1.init("mougli", "chihuahua", 9);

var chien2 = Object.create(Chien);
chien2.init("pupuce", "berger allemand", 900);

var chien3 = Object.create(Chien);
chien3.init("grim", "golden", 30);

Chiens.push(chien1);
Chiens.push(chien2);
Chiens.push(chien3);

console.log("Le chenil héberge " + Chiens.length + " chien(s) : ")
Chiens.forEach(function (Chien){
    console.log(Chien.nom + " est un " + Chien.race + " mesurant " + Chien.taille + " cm. Il aboie : " + Chien.aboyer())
});
