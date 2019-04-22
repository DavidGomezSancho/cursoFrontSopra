"use strict";
exports.__esModule = true;
var CestaCompra = /** @class */ (function () {
    function CestaCompra(lista) {
        if (lista === void 0) { lista = []; }
        this.lista = lista;
    }
    CestaCompra.prototype.addProducto = function (nuevoProd) {
        this.lista.push(nuevoProd);
    };
    CestaCompra.siguienteId = 2;
    return CestaCompra;
}());
exports.CestaCompra = CestaCompra;
