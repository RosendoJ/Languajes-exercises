console.log("************** DELIVERABLE 03 *********************");
/* 3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada source 
devuelva un nuevo objeto con las propiedades de source:*/

function clone(source) {
  let cloneObject = Object.create(source);        // ---> Se puede usar también método clone 
  for (var propCloneObject in cloneObject) {
    cloneObject[propCloneObject] = null;          // ---> Añadir switch con typeof para devolver contenido tipado correcto a cada campo
  };
  return cloneObject;
};

const sailBoat = {
  tradeName: "Moody",
  sailBoat: "Moody 376",
  shipLength: 12,
  shipWidth: 3,
};

console.log("Source: ", sailBoat);
console.log("Nuevo objeto clonado: ", clone(sailBoat));

/*  Merge
Implementa una función merge que, dados dos objetos de entrada source y 
target, devuelva un nuevo objeto con todas las propiedades de target y 
de source, y en caso de propiedades con el mismo nombre, 
source sobreescribe a target.*/

function merge(source, target) {
  let newObject = clone(target);
  for (var propTarget in newObject) {
    newObject[propTarget] = target[propTarget];
  };
  for (var propSource in source) {
    newObject[propSource] = source[propSource];
  } 
  return newObject
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const mergeObject = merge(a, b);
console.log("Nuevo objeto Merge: ", mergeObject);

// CONSTRUIR VERSIÓN FINA CON LODASH DIFFERENCE?


