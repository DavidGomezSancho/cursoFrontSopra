var __num_filas = 0;
function anyadirFila(){
    __num_filas++;
    var fila = document.createElement("tr");
    fila.id="filaNum"+__num_filas;
    
    anyadirTd(fila, "titulo");
    anyadirTd(fila, "director");
    anyadirTd(fila, "cod-id");
    //anyadirTd(fila, "genero");
    //El genero(select) es un elemento un poco especial
    var elementoFila = document.createElement("td");
    var valorElementoForm = document.getElementById("genero");
    var valorGeneroText = valorElementoForm.options[valorElementoForm.selectedIndex].text;
    var texto = document.createTextNode(valorGeneroText);
    elementoFila.appendChild(texto);
    fila.appendChild(elementoFila);

    anyadirTd(fila, "fechPublicacion");
    anyadirTd(fila, "valoracion");

    var boton = document.createElement("button");
    var current_num = __num_filas;
    boton.addEventListener("click", function(){ eliminarFila(current_num); });
    boton.appendChild(document.createTextNode("Eliminar"));

    var tabla = document.getElementsByClassName("peliculasT")[0];
    fila.appendChild(boton);
    tabla.appendChild(fila);
}

function eliminarFila(numeroFila){
    var tabla = document.getElementsByClassName("peliculasT")[0];
    tabla.removeChild(document.getElementById("filaNum"+numeroFila));
}

function anyadirTd(fila, idElementoForm){
    var elementoFila = document.createElement("td");
    var valorElementoForm = document.getElementById(idElementoForm).value;
    var texto = document.createTextNode(valorElementoForm);
    elementoFila.appendChild(texto);
    fila.appendChild(elementoFila);
}