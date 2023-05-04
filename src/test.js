let nom = "GUENOT";
const prenom = "Yann";

function nameJoiner (nom, prenom) {
    console.log(nom + " " + prenom);
    if (prenom === "Yann") {
        console.log('quel beau prenom');
    }
    if (nom === "GUENOT") {
        console.log('Comme moi');
    }
    else {
        console.log("Nous n'avons pas les memes valeurs");
    }
}
