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

console.log(increaseValuePercent(50, 16));
console.log(increaseValuePercent(97, 50));


/* ------------------------------------------------------*/

console.log("5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs.");

// function getMaxValue(...c){
//     return Math.max(...c);
// }
// console.log(getMaxValue(10,20, 30));
// console.log(getMaxValue(70,60, 50));

/**
 * get the max value of three values
 * @param {number} a first value
 * @param {number} b second value
 * @param {number} c last value
 * @returns {number} return max value
 */
function getMaxValue(a, b, c) {
    return Math.max(a, b, c);
}
console.log(getMaxValue(10, 20, 30));
console.log(getMaxValue(70, 60, 50));

/* ------------------------------------------------------*/

console.log("6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau.");

/**
 * calculate the array sum 
 * @param {array} arr array of numbers ex. [2, 4 ,10,..]
 * @returns {number} the sum of the given array.
 */
function calculateArraySum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item
    }
    return sum
}

function calculateArraySum2(arr) {
    return arr.reduce((a, b) => a + b, 0);
    // return arr.reduce(function(a, b) {
    //     return a + b;
    // }, 0);
}

console.log(calculateArraySum([2, 5, 5]));
console.log(calculateArraySum2([-2, 50, 5 , 0]));


/* ------------------------------------------------------*/

console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre.");

/**
 * return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max+1));
}

console.log(getRandomValue(10));
console.log(getRandomValue(100));


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