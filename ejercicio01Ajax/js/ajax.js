function inicializarAjax(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","./ejercicio01Ajax/data.json");
    ajax.onreadystatechange = function(){
        if(ajax.status == 200 && ajax.readyState == 4){
             var datos = JSON.parse(ajax.responseText)
            console.log(datos.titulo);
            anyadirFilaAPartirDeParametros(datos.titulo, datos.director, datos.codId, datos.genero, datos.fechPublicacion, datos.valoracion);
        }
    }
    ajax.send();
}