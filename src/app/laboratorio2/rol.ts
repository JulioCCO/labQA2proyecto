export class Rol {
    descripcion:string;
    estado:boolean;
    idRol:number;
    
    constructor(descripcion:string, estado:boolean, id:number) {
        this.descripcion = descripcion; //STRING
        this.estado = estado;//BOOLEAN
        this.idRol = id;//ENTERO
    }

    getIdRol() {
        return this.idRol;
    }

    getDescripcion() {
        return this.descripcion;
    }

    setIdRol(id:number) {
        this.idRol = id;
    }

    setDescripcion(descripcion:string) {
        this.descripcion = descripcion;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado:boolean) {
        this.estado = estado;
    }
}
