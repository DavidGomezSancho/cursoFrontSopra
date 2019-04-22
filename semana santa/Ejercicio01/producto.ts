import { CestaCompra } from './cesta';

export class Producto {
    /*public id: number;
    public nombre: string;
    public precio: number;
    public fechaCad: Date;*/

    

    constructor(
        public nombre: string,
        public precio: number,
        public fechaCad: Date,
        public id: number =
        CestaCompra.siguienteId
    ){
        CestaCompra.siguienteId += 1;
    }

    toString(){
        console.log(`${this.id} ${this.nombre} ${this.precio} caduca en ${this.fechaCad}`);
    }
}