var mul = prompt("Saisissez un chiffre")
var one = 1
if (mul <= 2 || mul >= 10){
    console.log ("Saisissez un chiffre entre 2 et 9 !")
}
else{
while (one < 11){
    console.log (mul * one++)
}}