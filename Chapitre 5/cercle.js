var rayon = prompt("Saisissez le rayon de votre cercle.")
function perimetre(){    
    var perimetre = 2 * Math.PI * rayon
    return (perimetre)
}

function aire(){
    var aire = Math.PI * (rayon * rayon)
    return (aire)
}

var perimetreR = perimetre()
var aireR = aire()

console.log(perimetreR)
console.log(aireR)


/* périmètre =  2 × π × r.
diamètre =  d = 2 × r
aire =  π × d²/4 = π × r²
π = Math.PI*/