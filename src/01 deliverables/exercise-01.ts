console.log("************** DELIVERABLE 01 *********************");

const arrayModel = ["Primero", "Segundo", "Tercero", "Último"];
console.log("Array model: " + arrayModel);

/* Head
Implementa una función head (inmutable), tal que, dado un array como entrada
extraiga y devuelva su primer elemento. Utiliza destructuring. */

const head = ([first]: string[] | number[]) => first; 

console.log("Head: " + head(arrayModel));


/* Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada 
devuelta todos menos el primer elemento. Utiliza rest operator.
 */
const tail = ([first, ...remain]: string[] | number[]) => remain;

console.log("Tail: " + tail(arrayModel));

/* Init
Implementa una función init (inmutable), tal que, dado un array como entrada 
devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.
 */

const init = (noLast: string[]) => console.log("Init: " + noLast.slice(0, (noLast.length - 1)));

init(arrayModel);

/* Last
Implementa una función last (inmutable), tal que, dado un array como entrada 
devuelva el último elemento.
 */
const last = (onlyLast: string[]) => console.log("Last: " + onlyLast[onlyLast.length - 1]);

last(arrayModel);
