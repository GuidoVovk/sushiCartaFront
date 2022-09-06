export class CartaExtra{
    id?: number;
    nombreCombo: string;
    cantidad: string;
    nombreRolls: string;
    precioCombo: string;

    constructor(nombreCombo: string, cantidad: string, nombreRolls: string, precioCombo: string){
        this.nombreCombo = nombreCombo;
        this.cantidad = cantidad;
        this.nombreRolls = nombreRolls;
        this.precioCombo = precioCombo;
    }
}