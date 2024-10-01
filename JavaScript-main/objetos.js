let persona = {
  nombre: "Camilo",
  apellido: "rocha",
  telefono: 32656514,
  email: "cerorocha@distrital.edu.co",
  edad: 25,
};
let persona3 = new Object();
persona3.nombre = "jorge";
persona3.apellido = "rocha";

let persona2 = {
  nombre: "Camilo",
  apellido: "rocha",
  telefono: 32656514,
  email: "cerorocha@distrital.edu.co",
  edad: 25,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
console.log(persona2.nombreCompleto());
for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}
persona.telefono = 231312312312;
console.log(persona);
delete persona.telefono;
console.log(persona);
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

function Persona6(nombre = "juan", apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombrecompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
let personax = new Persona6();
console.log(personax);
let padre = new Persona6(
  "norbey",
  "gutierrez",
  "norbeygutierrez@libertadores.edu.co"
);
console.log(padre.nombrecompleto());
let madre = new Persona6(
  "daniela",
  "gutierrez",
  "danielagutierrez@libertadores.edu.co"
);
console.log(padre.nombrecompleto());
console.log(madre.nombrecompleto());
console.log(madre);

Persona6.prototype.tel = 5415452;

console.log(padre);

function Fsaludar(nombre) {
  nombre;
  return "Hola " + nombre;
}
const Cliente1 = {
  saludar: Fsaludar,
};
console.log(Cliente1.saludar("Darcy"));

let constructor = function (precio) {
  let miObjeto = {
    precioBase: precio,
    iva: 1.21,
    calcularIva: function () {
      return this.precioBase * this.iva;
    },
  };
  return miObjeto;
};
//funcion anonima
//closure utilizar una funcion anonima
precio1 = constructor(100);
console.log(precio1.calcularIva());

function miFuncion(){
    let count = 1
    function contador (){

        return count
    }
    return contador()
}
console.log(miFuncion())
count