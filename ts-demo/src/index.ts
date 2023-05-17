// Esto es un comentario

console.log('Hola TypeScript');
console.log('Adios Martin');

//Declaracion de Variables:
var nombre: string = "Martin";
let email = "martin@imaginagroup.com"; //variable de ambito local

console.log("Hola" + nombre);
console.log("Que tal", nombre, "?");
console.log(`¿Como han ido las vacaciones, ${nombre} ?`);

console.log(`Email de ${nombre} es ${email}`)

const PI: number = 3.1416;

var apellidos: any = "San Jose"; //Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;

var error: boolean;
error = false;

console.log(`¿Hay error?: ${error}`) //el template string convierte todo a string cadena

//instanciacion multiple de variables

let a:string,b:boolean,c:number; //instancia 3 variables sin valor pero con tipo

a = "TypeScript";
b = true;
c = 8.9;

//BuiltIn Types: number, string, boolean, void, null y undefined

let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

let valores: (string | number | boolean)[] = [false, "hola", true, 56]

//Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P",
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

//interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    importancia: number
}

//podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    importancia: 10
}

console.log(`Tarea: ${tarea1.nombre}`)

//crear Types de typescript

type Producto = {
    precio: number,
    nombre: string,
    año: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    año: 2010
}

console.log(coche.año < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`)

//Switch
switch(tarea1.estado) {
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
let listaTareasNueva: Tarea[] = [
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
]

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
}
);