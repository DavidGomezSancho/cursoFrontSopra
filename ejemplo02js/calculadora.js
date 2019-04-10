var display = 0;
function sumar (primero, segundo){
    var numero_final = 0;
    for(var i=0; i<arguments.length;i++){
        numero_final+=arguments[i];
    }
    display += numero_final;
    return numero_final;
}
//alert(sumar(2,2,2));
sumar(3);
alert(display);

function restar (primero, segundo){
    var numero_final = arguments[0];
    for(var i=1; i<arguments.length;i++){
        numero_final-=arguments[i];
    }
    display -= numero_final;
    return numero_final;
}
restar(1);

function multiplicar (primero, segundo){
    if(arguments.callee.length ==arguments.length){
        return primero*segundo;
    }
    return display*=primero;
}
multiplicar(2);

function dividir (primero, segundo){
    if(arguments.callee.length ==arguments.length){
        return primero/segundo;
    }
    return display=display/primero;
}
dividir(2);
alert(display);
console.log(display);