//Console tips

console.log("hola")

let lista = ["Uno", "Dos", "Tres"];
lista.forEach((_) => console.log());

let nombre = "martin"

console.log(`Hola, ${nombre}`)

//Console assert

var a: number = 100;

console.assert

//console count

function contador (text: string){
    console.count(text)
}

contador("Hola"); //1
contador("Adios"); //1

contador("Hola"); //2

console.countReset()

console.info("Texto informativo")
console.warn("Texto de aviso")
console.error ("texto de error")

function uno(){
    dos();
}

function dos (){
    tres() 
}

function tres(){
    console.trace();//trazar por donde se ha ido ejecutando la funcion
}

uno(); //inicia el trace