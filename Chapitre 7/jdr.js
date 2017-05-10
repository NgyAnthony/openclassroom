// TODO : ajoutez ici la définition de l'objet perso
var perso = {
    sante : 150,
    nom : "Aurora",
    force : 100,
    xp : 150,
    
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience.";
    return description;
    }

};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());