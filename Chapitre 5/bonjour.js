// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var prenom = prompt("Saisissez votre prénom : ")
    var nom = prompt("Saisissez votre nom : ")
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

console.log(direBonjour())