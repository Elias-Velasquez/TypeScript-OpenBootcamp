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

//Asignacion multiple de variables
let miTarea= {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    importancia: 1
}

let { titulo: string , estado, importancia} = miTarea;

//Spread operator
let listaCompraLunes: string[] = ["Leche", "Papas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Arroz"]

//en objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1231314"
}

let nuevoEstado = {
    ...estadoApp,
    session:4
}


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

//for in es mas util en objetos o cadenas de texto
//for each mejor para arrays

//BUCLE WHILE
while(tarea1.estado !== Estados.Completado){
    if(tarea1.importancia == 5){
        tarea1.estado = Estados.Completado;
        break;
    } else {
    tarea1.importancia ++;
}

}


do {
    tarea1.importancia ++;
    tarea1.estado = Estados.Completado
} while(tarea1.estado !== Estados.Completado);

//Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar(){

    let nombre = "Martin"

    console.log(`Hola, ${nombre}`);
}

//invocacion de la funcion
saludar();

/**
 * 
 * @param nombre nombre de la persona a saludar
 */
function saludarPersona(nombre: string){
    console.log(`Hola, ${nombre}`);
}


saludarPersona("Martin");

function despedirPersona(nombre: string = "Pepe"){
    console.log(`Adios, ${nombre}`)
}

despedirPersona(); //Adios, Pepe
despedirPersona("Alba"); //Adios, Alba

function despedidaOpcional(nombre?: string){
    if(nombre){
        console.log(`¡Adios, ${nombre}!`);
    } else {
        console.log(`¡Adios!`);
    }
}

despedidaOpcional(); //Adios
despedidaOpcional("Juanjo"); //Adios Juanjo!

function variosParams(nombre: string, apellidos?:string, edad: number = 18){
    if(apellidos){
    console.log(`${nombre} ${apellidos} tiene ${edad} años`)
    }else{
        console.log(`${nombre} tiene ${edad} años`)
    }
}

variosParams("martin") //Martin tiene 18 años
variosParams("Martin", "San Jose") //Martin san jose tiene 18 años
variosParams("Martin", "30") // Martin tiene 30 años


function ejemploVariosTipos(a: string | number){
    if(typeof(a) === "string"){
        console.log('A es un string')
    } else if(typeof(a) === "number"){
        console.log("A es un number")
    } else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number")
    }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);

//
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos} `;
}

const nombreCompleto = ejemploReturn("Martin", "San Jose");

console.log(nombreCompleto)
console.log(ejemploReturn("Martin", "San Jose"))

function ejemploMultipleParams(...nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    });
}

ejemploMultipleParams("Martin");
ejemploMultipleParams("martin", "Pepe", "Juan", "Alba");

const lista = ["Alberto", "Sandra"]
ejemploMultipleParams(...lista);

//Arrow functions

type Empleado =  {
    nombre: string
    apellidos: string
    edad: number
}

let empleadoMartin: Empleado = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 30
}

const mostrarEmpleado = (empleado : Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`

//Llamamos la funcion
mostrarEmpleado(empleadoMartin);

const datosEmpleado = (empleado: Empleado): string => {
    if(empleado.edad > 70){
        return `Empleado ${empleado.nombre} está en edad de jubilacion`
    } else {
        return `Empleado ${empleado.nombre} está en edad laboral`
    }
}

datosEmpleado(empleadoMartin) //Empleado Martin está en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70) {
        return
    } else {
        cobrar() //callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoMartin, () => 'Cobrar Martin')

//Async functions

async function ejemploAsync(): Promise<string>{
    await console.log("Tarea a completar antes de seguir con la secuencia de instruccion")
    console.log("tarea completada")
    return "Completado"
}

ejemploAsync()
.then((respuesta)=> {
    console.log("rESPUESTA", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => "Todo ha terminado")

// Generators

function* ejemploGenerator(){
    // yield --> para emitir valores
    let index = 0;

    while(index < 5){
        //Emitimos un valor incrementado
        yield index++;
    }
}

let generadora = ejemploGenerator();

//Accedemos a los valores emitidos

console.log(generadora.next().value)//0
console.log(generadora.next().value)//1
console.log(generadora.next().value)//2
console.log(generadora.next().value)//3

// Worker

function* watcher(valor: number){
    yield valor;//emitimos el valor inicial

    yield* worker(valor); //llamamos a las emisiones del worker para que emita otros valores
    yield valor + 10;
}

function* worker(valor: number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value);//0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value);//1 (lo ha hecho el worker)
console.log(generatorSaga.next().value);//2 (lo ha hecho el worker)
console.log(generatorSaga.next().value);//3 (lo ha hecho el worker)
console.log(generatorSaga.next().value);//4 (lo ha hecho el watcher)
