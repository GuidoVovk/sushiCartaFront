export class Carta {
    id?: number;
    nombre: string;
    descripcion: string;
    img: string;
    precio: string;

    constructor(nombre:string, descripcion:string, img:string, precio:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
    }

}