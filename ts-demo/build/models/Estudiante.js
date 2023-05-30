"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombre, cursos, apellidos) {
        this.ID = '123124';
        //Inicializamos las propiedades
        this.nombre = nombre;
        this.apellidos = apellidos ? apellidos : undefined;
        // if(apellidos){
        //     this.apellidos = apellidos
        // }
        this.cursos = cursos;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map