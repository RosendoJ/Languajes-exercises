console.log("************** DELIVERABLE 02 *********************");
/* 2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
devuelva la concatenación de ambos. Utiliza rest / spread operators.*/

const arrayA = [1, 2, 3, 4, 5];
const arrayB = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];
console.log("Array A: " + arrayA);
console.log("Array B: " + arrayB);

const concat = (a, b) => {
    let newArray = [...a, ...b];
    console.log("Concat: " + newArray);
}; 

concat (arrayA, arrayB);

// ---> Con el método concat de arrays.prototype sería más fino 

/* Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays 
de entrada (más de 2). */

const multipleConcat = (a) => {
    let multipleNewArray = [...a];
    console.log("Opcional Concat Multiples Arrays: "  + multipleNewArray);
}

const arrayC = [null, undefined, 38];

const multipleArray = [[arrayA], [arrayB], [arrayC]];

multipleConcat (multipleArray);

// Otra opción con push
const arrayD = [1001, 1002];

multipleArray.push([arrayD]);

multipleConcat (multipleArray);
