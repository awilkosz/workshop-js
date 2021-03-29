//Fonction constructeur
function Personne(nom,prenom,pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function() {
        return "Nom: " + this.nom + " Prénom: " + this.prenom + " Pseudo: " + this.pseudo;
    };
}

let jules = new Personne("LEMAIRE","Jules","jules77");
let paul = new Personne("LEMAIRE","Paul","paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

//Modifier un objet
jules.pseudo = "jules44";
console.log(jules.getNomComplet());

//Ajouter une propriété à Personne
console.log(jules.age); //Undefined

Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function getInitiales() {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};

console.log(jules.getInitiales()); //JL

//Héritage via une fonction constructeur
function Client(nom,prenom,pseudo,numeroClient) {
    Personne.call(this,nom,prenom,pseudo)

    this.numeroClient = numeroClient;

    this.getInfos = function() {
        return "Numéro client: " + this.numeroClient + " Nom: " + this.nom + " Prénom: " + this.prenom;
    }
}

let steve = new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());