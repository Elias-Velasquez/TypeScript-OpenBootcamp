"use strict";
// Esto es un comentario
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookies_utils_1 = require("cookies-utils");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const cursos_mock_1 = require("./mock/cursos.mock");
const Persona_1 = require("./models/Persona");
const persona_interface_1 = require("./models/interfaces/persona.interface");
const Programar_1 = require("./models/Programar");
console.log('Hola TypeScript');
console.log('Adios Martin');
//Declaracion de Variables:
var nombre = "Martin";
let email = "martin@imaginagroup.com"; //variable de ambito local
console.log("Hola" + nombre);
console.log("Que tal", nombre, "?");
console.log(`¿Como han ido las vacaciones, ${nombre} ?`);
console.log(`Email de ${nombre} es ${email}`);
const PI = 3.1416;
var apellidos = "San Jose"; //Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;
var error;
error = false;
console.log(`¿Hay error?: ${error}`); //el template string convierte todo a string cadena
//instanciacion multiple de variables
let a, b, c; //instancia 3 variables sin valor pero con tipo
a = "TypeScript";
b = true;
c = 8.9;
//BuiltIn Types: number, string, boolean, void, null y undefined
let listaTareas = ["Tarea 1", "Tarea 2"];
let valores = [false, "hola", true, 56];
//Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
//podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    importancia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);
//Asignacion multiple de variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    importancia: 1
};
let { titulo: string, estado, importancia } = miTarea;
//Spread operator
let listaCompraLunes = ["Leche", "Papas"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Arroz"];
//en objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1231314"
};
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: "Audi",
    precio: 45000,
    año: 2010
};
console.log(coche.año < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
//Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea esta Incompleta");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta Pendiente");
        break;
    default:
        break;
}
//Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        importancia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        importancia: 0
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Completado,
        importancia: 15
    }
];
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
//for in es mas util en objetos o cadenas de texto
//for each mejor para arrays
//BUCLE WHILE
while (tarea1.estado !== Estados.Completado) {
    if (tarea1.importancia == 5) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.importancia++;
    }
}
do {
    tarea1.importancia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
//Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Martin";
    console.log(`Hola, ${nombre}`);
}
//invocacion de la funcion
saludar();
/**
 *
 * @param nombre nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludarPersona("Martin");
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios, ${nombre}`);
}
despedirPersona(); //Adios, Pepe
despedirPersona("Alba"); //Adios, Alba
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`¡Adios, ${nombre}!`);
    }
    else {
        console.log(`¡Adios!`);
    }
}
despedidaOpcional(); //Adios
despedidaOpcional("Juanjo"); //Adios Juanjo!
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
variosParams("martin"); //Martin tiene 18 años
variosParams("Martin", "San Jose"); //Martin san jose tiene 18 años
variosParams("Martin", "30"); // Martin tiene 30 años
function ejemploVariosTipos(a) {
    if (typeof (a) === "string") {
        console.log('A es un string');
    }
    else if (typeof (a) === "number") {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number");
    }
}
ejemploVariosTipos("Hola");
ejemploVariosTipos(3);
//
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos} `;
}
const nombreCompleto = ejemploReturn("Martin", "San Jose");
console.log(nombreCompleto);
console.log(ejemploReturn("Martin", "San Jose"));
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Martin");
ejemploMultipleParams("martin", "Pepe", "Juan", "Alba");
const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);
let empleadoMartin = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 30
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
//Llamamos la funcion
mostrarEmpleado(empleadoMartin);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} está en edad laboral`;
    }
};
datosEmpleado(empleadoMartin); //Empleado Martin está en edad laboral
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); //callback a ejecutar
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleadoMartin, () => 'Cobrar Martin');
//Async functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instruccion");
        console.log("tarea completada");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("rESPUESTA", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error);
}).finally(() => "Todo ha terminado");
// Generators
function* ejemploGenerator() {
    // yield --> para emitir valores
    let index = 0;
    while (index < 5) {
        //Emitimos un valor incrementado
        yield index++;
    }
}
let generadora = ejemploGenerator();
//Accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
// Worker
function* watcher(valor) {
    yield valor; //emitimos el valor inicial
    yield* worker(valor); //llamamos a las emisiones del worker para que emita otros valores
    yield valor + 10;
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); //0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); //1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); //2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); //3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); //4 (lo ha hecho el watcher)
//persistencia de datos
//1. localstorage --> 
//2. sessionstorage -->
//3. cookies --> 
//localstorage
// function guardar(): void{
// }
const cookiesOptions = {
    name: "name",
    value: "value",
    expires: new Date(2099, 10, 1),
    path: "/", //optional string.
};
//Seteamos la cookie
(0, cookies_utils_1.setCookie)(cookiesOptions);
//leer cookie
let cookieLeida = (0, cookies_utils_1.getCookieValue)("value");
//eliminar
(0, cookies_utils_1.deleteCookie)("usuario");
//Eliminar todas las cookies
(0, cookies_utils_1.deleteAllCookies)();
//Clase temporizador
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            //cuando haya pasado el tiempo, se ejectura terminar()
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
//definimos la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado:", tiempo);
};
//Lanzamos el temporizador
miTemporizador.empezar(); //Se inicia el timeout y cuando termina, se ejecuta terminar
// setInterval(() => console.log("Tic"), 1000)
//Eliminar la ejecucion ed la funcion
delete miTemporizador.terminar;
//Extender de event target
// class Temporizador2 extends 
// declarando clases en typescript
// Creamos un curso
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// listaCursos.push(cursoTS, cursoJS); //[lISTA DE CURSOS]
const martin = new Estudiante_1.Estudiante("Martin", listaCursos, "San Jose");
console.log(`${martin.nombre} estudia:`);
martin.cursos.forEach(curso => {
    console.log(`- ${curso.nombre} {${curso.horas} horas}`); //- typescript (15 horas)
});
const cursoAngular = new Curso_1.Curso("Angular", 40);
martin.cursos.push(cursoAngular); //Añadimos
//Conocer las horas estudiadas
martin.horasEstudiadas; //number
martin.ID_Estudiante;
//Saber la instancia de un objeto/variable
//- typeOf
//- InstanceOf
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Date) {
    console.log("Es una instacia de Date");
}
if (martin instanceof Estudiante_1.Estudiante) {
    console.log("Martin es un Estudiante");
}
//Herencia y Polimorfismo
let empleado1 = new Persona_1.Empleado1("Martin", "San Jose", 30, 2000);
let empleado2 = new Persona_1.Empleado1("Pepe", "Garcia", 21, 1000);
let empleado3 = new Persona_1.Empleado1("Juan", "Gonzalez", 40, 3000);
let jefe = new Persona_1.Jefe("Pablo", "Garcia", 50);
jefe.empleados.push(empleado1, empleado2, empleado3);
// jefe.empleados.forEach((empleado:Empleado1) => {
//     console.log(empleado.nombre);
// })
empleado1.saludar(); //especificado en empleado, este saludo es especial
jefe.saludar(); //herencia de persona, este es igual al de persona
//programacion DAC. Principios SOLID
//cuando dos clases tienen nombres exactamentes iguales
//se pueden mezclar
jefe.empleados.forEach((trabajador) => {
    trabajador.saludar(); //especificado en Trabajador
});
// * Uso de Interfaces
let programar = {
    titulo: '',
    descripcion: 'Practicar con Katas para aprender a desarrollar con TS',
    completada: undefined,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
};
//click derecho autocompletar con todo lo q necesta
console.log(programar.resumen());
// Tarea de programacion (implementa ITarea)
let programarTs = new Programar_1.Programar("Typescript", "Tarea de programacion en TS", false, persona_interface_1.Nivel.Bloqueante);
console.log(programarTs.resumen());
//Type, es una manera de definir un tipo propio y personalizado
//que no requiere de constrcutor o metodos y que no es tan complejo como clase
//Un interface, es un para definir algunos metodos obligatorios si o si
//objetos mas complejos.
//Class
//DECORADORES
//funciones declaras a traves de un simbolo - @
//sirve para poner informacion e nuestras class
//- Clases
//- Parametros
//- Metodos
//- Propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Martin";
    }
}
__decorate([
    Override('prueba') //llamar a la funcion Override
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre); // "Prueba"
//Otra funcion para usarla como decorador
function SoloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = '';
    }
}
__decorate([
    SoloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martin";
console.log(pruebaLectura.nombre); // undefined, ya que no se puede dar valor es solo de lectura
//Decorador para parametros de un metodo
// function mostrarPosicion(target:any, key: string, parameterIndex: number){
//     console.log("Posicion", parameterIndex);
// }
// class PruebaMetodoDecorador {
//     prueba(a: string, @mostrarPosicion b: boolean){
//         console.log(b);
//     }
// }
// //Usamos el metodo con el parametro y su decorador
// new PruebaMetodoDecorador().prueba('Hola', false)
//# sourceMappingURL=index.js.map