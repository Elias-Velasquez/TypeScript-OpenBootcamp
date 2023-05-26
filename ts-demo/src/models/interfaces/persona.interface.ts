export enum Nivel {
    "Informativa",
    "Urgente",
    "Bloqueante"
}

// inerface sirve para definir la firma y los puntos necesarios a
//implementar

export interface ITarea {
    titulo: string,
    descripcion?: string,
    completada: boolean | undefined,
    urgencia?: Nivel,
    resumen: () => string
}