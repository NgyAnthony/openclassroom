var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    perimetre : function perimetre(){
        calculP = 2 * Math.PI * r
        return calculP;
    },
    aire : function aire(){
        calculA = Math.PI * r*r
        return calculA
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());


/* périmètre =  2 × π × r.
diamètre =  d = 2 × r
aire =  π × d²/4 = π × r²
π = Math.PI*/