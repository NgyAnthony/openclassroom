var nb = prompt("Saisisez un nombre");
if (nb < 50 || nb > 100){
    console.log ("Saisisez un nombre entre 50 et 100 !")
}
else {
    while (nb <= 100){
    nb++
    console.log (nb);
    }
}