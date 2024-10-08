class Persona {
  static contadorPersonas = 0;
  email = "default email";

  static get MAX_OBJ() {
    return 5;
  }
  constructor(nombre,apellido){
    this._nombre = nombre ;
    this._apellido = apellido;

    if (Persona.contadorPersonas< Persona.MAX_OBJ){
        this.idPersona = ++ Persona.contadorPersonas;
    }else {
        console.log("se han creado la mayor cantidad de personas permitidas")
    }
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto(){

    return (`ID: ${this.idPersona} ${this._nombre} ${this._apellido}`);
  }
  toString(){
    return this.nombreCompleto();
  } 
}

const persona1 = new Persona("Pepito", "Perez");

console.log(persona1.toString())

class Empleado extends Persona{

  constructor(nombre,apellido,cargo){
    super(nombre,apellido);
    this._cargo = cargo;
  }
  get cargo(){
    this._cargo=cargo;
  }
  set cargo(cargo){
    this._cargo=cargo;
  }
  nombreCompleto(){
    return `${super.nombreCompleto()} ${this._cargo}`
  }

}
const empleado = new Empleado("daniela","montenegro","IT eng");
const empleado1 = new Empleado("daniela","montenegro","IT eng");
const empleado2 = new Empleado("daniela","montenegro","IT eng");
const empleado3 = new Empleado("daniela","montenegro","IT eng");
const empleado4 = new Empleado("daniela","montenegro","IT eng");
const empleado5 = new Empleado("daniela","montenegro","IT eng");
console.log(empleado.toString())
console.log(empleado1.toString())
console.log(empleado2.toString())
console.log(empleado3.toString())
