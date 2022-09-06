export class Adicional{
    id?: number;
    nombreA: string;
    precioA: string;
    precioB: string;
    precioEnvio: string;
    precioEnvioDos: string;

    constructor(nombreA: string, precioA:string, precioB:string, precioEnvio:string, precioEnvioDos:string){
        this.nombreA = nombreA;
        this.precioA = precioA;
        this.precioB = precioB;
        this.precioEnvio = precioEnvio;
        this.precioEnvioDos = precioEnvioDos;
    }
}