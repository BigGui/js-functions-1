// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.


/* ------------------------------------------------------*/

console.log("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");
/**
 * get parameters sum
 * @param {number} a 
 * @param {number} b 
 * @returns {number} result
 */
function getSum(a, b) {
    return a + b;
}

console.log(getSum(10, 20));
console.log(getSum(33, 100));


/* ------------------------------------------------------*/

console.log("2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre.");
/**
 * Get smallest value
 * @param {number} a 
 * @param {number} b 
 * @returns {number} result
 */
function getSmallest(a, b) {
    return Math.min(a, b);
}

function getSmallest2(a, b) {
    if (a < b) return a;
    return b;
}

function getSmallest3(a, b) {
    return a < b ? a : b;
}

console.log(getSmallest(25, 56));
console.log(getSmallest(32, 45));


/* ------------------------------------------------------*/

console.log("3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau.");

/**
 * Get the last value of an array
 * @param {array} array - not empty
 * @returns {*} Last value
 */
function getLastArrayValue(array) {
    return array[array.length - 1];
}

const arrayOne = [10, 25, 63, 42];
const arrayTwo = ["Luc", "Paul", "Jean", "Lucie"];

console.log(getLastArrayValue(arrayOne));
console.log(getLastArrayValue(arrayTwo));


/* ------------------------------------------------------*/

console.log("4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation.");

/**
 * increases a value with a percentage without %
 * @param {number} a arbitrary value to increase.
 * @param {number} percent percentage without % (ex : 1, 2, 3)
 * @returns {number} value "a" increased.
 */
function increaseValuePercent(a, percent) {
    return a * (1 + percent / 100);
}

console.log(increaseValuePercent(50, 25));
console.log(increaseValuePercent(97, 50));


/* ------------------------------------------------------*/

// console.log("5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale .");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau.");

// console.log();
// console.log();


/* ------------------------------------------------------*/

// console.log("13/ Implémentez une fonction qui retourne le nombre de mots dans un texte.");

// console.log();
// console.log();