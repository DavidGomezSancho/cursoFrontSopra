var __num_filas = 0;
function inicializar(){
    var tablaVista = document.getElementById("vistaTablaPeliculasBody");
    var tabla = localStorage.getItem("tabla");
    if(tabla != null){
        if ((tabla.trim()==="")){
            inicializarAjaxPrueba();
        }else{
            tablaVista.innerHTML=tabla;
            __num_filas = localStorage.getItem("num_filas");
            if(__num_filas==null){
                __num_filas=0;
            }
        }
    }else{//Si está vacía la tabla le enchufas ajax
        inicializarAjaxPrueba();
    }
    
}

function anyadirPeliculaButton(){
    var pelicula = getPeliculaFromFormulario();
    if(!modificarPelicula(pelicula)){
        anyadirFilaAPartirDeParametros(pelicula);
    }
}

function getPeliculaFromFormulario(){
    var pelicula = new Pelicula();
    pelicula.titulo = document.getElementById("titulo").value;
    pelicula.director = document.getElementById("director").value;
    pelicula.codId = document.getElementById("cod-id").value;
    var elementoGenero = document.getElementById("genero");
    var valorGenero = elementoGenero.options[elementoGenero.selectedIndex].text;
    pelicula.genero = valorGenero;
    pelicula.fecha = document.getElementById("fechPublicacion").value;
    pelicula.valoracion = document.getElementById("valoracion").value;
    return pelicula;
}

function eliminarFila(numeroFila){
    var tabla = document.getElementById("vistaTablaPeliculasBody");
    tabla.removeChild(document.getElementById("filaNum"+numeroFila));
    localStorage.setItem("tabla", tabla.innerHTML);
}

function anyadirFilaAPartirDeParametros(pelicula){
    __num_filas++;
    var fila = document.createElement("tr");
    fila.id="filaNum"+__num_filas;
    var current_num_fila = __num_filas;
    localStorage.setItem("num_filas", __num_filas);
    anyadirTdAPartirDeParametros(fila, "titulo", pelicula.titulo);
    anyadirTdAPartirDeParametros(fila, "director", pelicula.director);
    anyadirTdAPartirDeParametros(fila, "cod-id", pelicula.codId);
    anyadirTdAPartirDeParametros(fila, "genero", pelicula.genero);
    anyadirTdAPartirDeParametros(fila, "fechPublicacion", pelicula.fechPublicacion);
    anyadirTdAPartirDeParametros(fila, "valoracion", pelicula.valoracion);
    fila.innerHTML+="<td><button onclick='eliminarFila("+current_num_fila+")'>Eliminar</button></td>";
    var tabla = document.getElementById("vistaTablaPeliculasBody");
    tabla.appendChild(fila);
    localStorage.setItem("tabla", tabla.innerHTML);
}

function anyadirTdAPartirDeParametros(fila, idElementoForm, valorParametro){
    var elementoFila = document.createElement("td");
    var texto = document.createTextNode(valorParametro);
    elementoFila.appendChild(texto);
    fila.appendChild(elementoFila);
}

function inicializarAjaxPrueba(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas");//"./ejercicio01Ajax/data.json"
    ajax.onreadystatechange = function(){
        if(ajax.status == 200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.responseText);
            for(let indice in datos){
                let pelicula = new Pelicula();
                pelicula.titulo=datos[indice].titulo;
                pelicula.director=datos[indice].director;
                pelicula.codId=datos[indice].codId;
                pelicula.genero=datos[indice].genero;
                pelicula.fecha=datos[indice].fecha;
                pelicula.valoracion=datos[indice].valoracion;
                anyadirFilaAPartirDeParametros(pelicula);
            }
        }
    }
    ajax.send();
}

function modificarPelicula(pelicula){
    var tabla=document.getElementById("vistaTablaPeliculasBody");
    var filas = tabla.getElementsByTagName("tr");
    var fila=filas[0];
    let i=0;
    do{
        if(fila.childNodes[2].innerHTML===pelicula.codId){
            let elementosDeFila = fila.childNodes;
            elementosDeFila[0].innerHTML=pelicula.titulo;
            elementosDeFila[1].innerHTML=pelicula.director;
            elementosDeFila[2].innerHTML=pelicula.codId;
            elementosDeFila[3].innerHTML=pelicula.genero;
            elementosDeFila[4].innerHTML=pelicula.fecha;
            elementosDeFila[5].innerHTML=pelicula.valoracion;
            return true;
        }
        i++;
        fila=filas[i];
    }while(typeof fila!="undefined");
    return false;
}