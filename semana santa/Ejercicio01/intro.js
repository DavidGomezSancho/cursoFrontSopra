"use strict";
exports.__esModule = true;
/*let index = 1;

while(index < 3){
    console.log("Hola a todos");
    index++;
}
/*for(let val of personajes){
    console.log(val);
}* /

function getNumLoteria (n1: number, n2: number) : string{
    return [n1, n2].sort(function(a,b) {return(a-b);}).join(",");
}

//personajes.forEach((val, pos) =>{console.log(val);})

let numLoteria = getNumLoteria(12, 5);
console.log(numLoteria);

function getNumLoteria2(...nums: Array<number>): string{//Recibe un array(nums) de todos los parametros
    return "";
}

function esPar(n){
    return n%2===0;
}

esPar(3);

let numPares = [1, 2, 3, 4, 5].filter(esPar);

function getDatos(){
    setTimeout(() => {
        cb ["un dato", "Otro dato"];
    }, 2000);//return
    //cb es callback
}

console.log("Antes de ejecutar getDatos");
//console.log(getDatos());

getDatos(datos => {
 console.log(datos);
});*/
var producto_1 = require("./producto");
var cesta_1 = require("./cesta");
var oneplus = new producto_1.Producto("One Plus 6T", 500, new Date(2019, 5, 20));
oneplus.toString();
var miCesta = new cesta_1.CestaCompra();
miCesta.addProducto(oneplus);
console.log(cesta_1.CestaCompra.siguienteId);
