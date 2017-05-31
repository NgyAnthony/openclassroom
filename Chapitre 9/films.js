/**
 * Created by Anthony on 31/05/2017.
 */
/* faire un tableau avec réalisateur, titre année de sortie*/

var film = {
    init : function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    decrire : function (){
        var description = this.titre + "(" + this.annee + ")" + ", " + this.realisateur;
        return description
    }
};

var film1 = Object.create(film);
film1.init("Le loup de Wall Street", 2013, "R1");

var film2 = Object.create(film);
film2.init("Les intouchables", 2010, "R2");

var film3 = Object.create(film);
film3.init("Babysitting", 2013, "R3");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film){
    console.log(film.decrire());
})