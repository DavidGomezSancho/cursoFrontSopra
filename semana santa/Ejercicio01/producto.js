"use strict";
exports.__esModule = true;
var cesta_1 = require("./cesta");
var Producto = /** @class */ (function () {
    /*public id: number;
    public nombre: string;
    public precio: number;
    public fechaCad: Date;*/
    function Producto(nombre, precio, fechaCad, id) {
        if (id === void 0) { id = cesta_1.CestaCompra.siguienteId; }
        this.nombre = nombre;
        this.precio = precio;
        this.fechaCad = fechaCad;
        this.id = id;
        cesta_1.CestaCompra.siguienteId += 1;
    }
    Producto.prototype.toString = function () {
        console.log(this.id + " " + this.nombre + " " + this.precio + " caduca en " + this.fechaCad);
    };
    return Producto;
}());
exports.Producto = Producto;
