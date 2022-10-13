/* let someObject = {
    key1: value1,
    key2: value2,
    key3: value3
  }; */
const obj1 = new Object();

const deportes = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powel",
  levantamientoTarro: "kain",
  metrosPedos100: "",
};
//forma uno de acceso a objetos
const nameOfWiner = deportes.athleticsLongJumpMen;
//forma dos de acceso a objetos
const nameOfDrunker = deportes["levantamientoTarro"];
//forma uno
console.log(`The winner is: ${nameOfWiner}`);
//forma dos
console.log(`The drunk man  is: ${nameOfDrunker}`);

//agregar propiedades al objetos

const grupo = {
  alumnos: [],
  turno: "",
  salon: "", //salon b
  //ratting
};

console.log(grupo);

grupo.turno = "part time";
grupo.salon = "salon b";
grupo.alumnos.push("Mumra");
grupo.alumnos.push("Eskeletor");
grupo.rating = 5;
grupo["tvNumber"] = undefined || null;

grupo.tvNumber = 2;
// checar pot llaves en un objeto
console.log("rating" in grupo);
console.log("pepito" in grupo);
//ediion de objetos agregar dot notation y square notation
grupo.turno = "full time";
grupo["salon"] = "salon c";

//remover propiedades del objeto

delete grupo.tvNumber; // se va se y se marcho
//console.log(grupo);

//listado de llaves 0 keys

const listaLlaves = Object.keys(grupo);
const listaValues = Object.values(grupo);
console.log(listaLlaves, "wooowwww 👻");
console.log(listaValues, "wooowwww x2  👻");

/* for (let key in grupo) {
  console.log(key);
  console.log(typeof key);
} */

//time to endurance

//iteration 1
const user = { name: "Kain", id: 6, books: [] };

const book1 = {
  title: "The Catcher in the Rye",
  author: "J.D Salinger",
  isbn: "0316769487",
  category: "Classic Literature",
};

const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "0446310786",
  category: "Classic Literature",
};

user.books.push(book1);
user.books.push(book2);
//console.log(user);
//iteration 4 create a library

const library = [];

library.push(user);

const book3 = {
  title: `An Astronaut's Guide to Life on Earth'`,
  author: "Chris Hadfield",
  isbn: "0316253030",
  category: "Biography",
};
user.books.push(book3);
//console.log(library);
