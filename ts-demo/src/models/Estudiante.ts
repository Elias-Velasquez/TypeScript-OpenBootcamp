import { Curso } from "./Curso";

export class Estudiante {
    //propiedades de clase
    nombre: string;
    apellidos?: string;
    cursos: Curso[];
    private ID: string = '123124'

    constructor(nombre: string, cursos: Curso[], apellidos?:string){
        //Inicializamos las propiedades
        this.nombre = nombre;
        this.apellidos = apellidos? apellidos : undefined
        // if(apellidos){
        //     this.apellidos = apellidos
        // }
        this.cursos = cursos;
    }

    get horasEstudiadas (): number{
        let horasEstudiadas = 0;
        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        })
    
        return horasEstudiadas;
    }

    set ID_Estudiante (id: string){
        this.ID = id
    }
}