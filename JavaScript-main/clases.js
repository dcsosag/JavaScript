//permiten agrupar un conjunto de metodos

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
}

const persona = new Persona ("darcy","sosa");
const persona1 = new Persona ("camila","gonzalez");

console.log(persona.nombre);
console.log(persona1.nombre);

persona.nombre = "abraham";

console.log(persona.nombre);