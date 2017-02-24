var price = Number(prompt("Entrez le prix hors taxe"));
var tva = 19.6/100 * price ;

console.log(tva);
console.log("Le prix TTC est de " +(price+tva) + "€");
alert("Le prix TTC est de " + (price+tva) + "€");
