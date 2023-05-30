"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Empleado1 = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}
exports.Persona = Persona;
class Empleado1 extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}
exports.Empleado1 = Empleado1;
class Jefe extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.empleados = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=Persona.js.map