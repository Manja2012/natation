// Exercice1 :
// Récupérer un nombre de personnes
// Itérer sur ce nombre la demande “quel âge avez-vous?” et selon ce qui est saisi dire si c’est un
// enfant, un jeune, un adulte ou un vieux.
// 1 à 6 ans « Vous êtes un jeune enfant. » 7 à 11 ans « Vous êtes un enfant qui a atteint l'âge de
// raison. » 12 à 17 ans « Vous êtes un adolescent. » 18 à 120 ans « Vous êtes un adulte. »

// for (let i = 0; i < 100; i++) {

//   let age = prompt("Quel âge avez-vous ?");
//   age = parseInt(age);

//   if (age >= 1 && age <= 6) {
//     alert("Vous êtes un jeune enfant.");
//   } else if (age >= 7 && age <= 11) {
//     alert("Vous êtes un enfant qui a atteint l'âge de raison.");
//   } else if (age >= 12 && age <= 17) {
//     alert("Vous êtes un adolescent.");
//   } else if (age >= 18 && age <= 120) {
//     alert("Vous êtes un adulte.");
//   } else {
//     alert("Entrée invalide ou âge hors des limites définies.");
//   }
// }


//////////////////////   *****    //////////////////////


// Exercice2 :
// Récupérer 20 nombres au clavier, les stocker dans un tableau et les trier par ordre croissant puis les
// afficher.

// let numbers = [];

// for (let i = 0; i < 5; i++) {
//   let num = prompt(`entrez un nombre ${i + 1} de :`);
//   numbers.push(parseInt(num, 10));
// }
// console.log(numbers)
// numbers.sort((a, b) => a - b);
// alert(numbers);

////////////////////    ********    ////////////////////

// Exercice 3 :
// Récupérer les membres d’une famille dans un tableau et afficher uniquement les cousins
let famille = [
    { nom: "alex", parent: "ivan" },
    { nom: "helen", parent: "ivan" },
    { nom: "anna", parent: "ivan" },
    { nom: "nik", parent: "mariya"},
    { nom: "stan", parent: "mariya" },
    { nom: "mike", parent: "mariya" },
    { nom: "mila", parent: "mariya" },
];

let persone = { nom: "mila", parent: "mariya" }; 
let cousins = famille.filter(member => {
    return member.parent === persone.parent && member.nom !== persone.nom;
});

console.log("cousins:", cousins);