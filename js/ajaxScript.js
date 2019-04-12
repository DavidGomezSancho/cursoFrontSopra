function getPeliculasAjax(){
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

function dameUno(pelicula){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas/"+pelicula.codId);
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}
function guardaUno(pelicula){
    var ajax = new XMLHttpRequest();
    ajax.open("POST","http://192.168.1.63:8080/peliculas/",true);
    ajax.setRequestHeader(
        'Content-Type','application/json; charset=utf-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);

    }
    ajax.send(
        JSON.stringify({codId: pelicula.codId,
    director: pelicula.director,
    fecha: pelicula.fecha,
    genero: pelicula.genero,
    titulo: pelicula.titulo,
    valoracion: pelicula.valoracion}));
}
function actualizaUno(pelicula){
    var ajax = new XMLHttpRequest();
    ajax.open("PUT","http://192.168.1.63:8080/peliculas/"+pelicula.codId,true);
    ajax.setRequestHeader('Content-Type','application/json; charset=utf-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);

    }
    
    ajax.send(
        JSON.stringify({codId: pelicula.codId,
    director: pelicula.director,
    fecha: pelicula.fecha,
    genero: pelicula.genero,
    titulo: pelicula.titulo,
    valoracion: pelicula.valoracion}));
}
function borraUno(pelicula){
    var ajax = new XMLHttpRequest();
    ajax.open("DELETE","http://192.168.1.63:8080/peliculas/"+pelicula.codId);
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}