const URL = "https://fluentjobs-fa22e.firebaseio.com/trabajos.json";

let xhr = new XMLHttpRequest();

/*xhr.addEventListener("readystatechange", function(){
    if(xhr.readyState === 4){
        let ofertas = JSON.parse(xhr.responseText);
        console.log("Datos: "+ofertas);

    }
    xhr.send();
});*/



function getJobs(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            let ofertas = JSON.parse(xhr.responseText);
            console.log("Datos: "+ofertas);

        }
    }
    xhr.send();
    
}

//getJobs();

URLGeneros = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
function getGeneros(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URLGeneros);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            let generos = JSON.parse(xhr.responseText);
            for(let i in generos){
                console.log(generos[i]+ " ");
            }
            //console.log("Generos: "+peliculas);
        }
    }
    xhr.send();
    
}

getGeneros();

var genero = prompt("Elige un genero: 0 (action) o 1 (terror)");
var eleccion = parseInt(genero);
var URLeleccion = "";
if(eleccion === 0){
    URLeleccion = "https://ejemplos-dc1c1.firebaseio.com/peliculas/action.json";
}else{
    URLeleccion = "https://ejemplos-dc1c1.firebaseio.com/peliculas/terror.json";
}

function getPeliculasPorGenero(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URLeleccion);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            let peliculas = JSON.parse(xhr.responseText);
            for(let i in peliculas){
                console.log(peliculas[i]+ " ");
            }
        }
    }
    xhr.send();
}
getPeliculasPorGenero();


let n = [2, 3, 4, 5];
//let dobles = n.map(function );


/* Codigo profesor
const URL_GENEROS = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
const URL_PELICULAS = "https://ejemplos-dc1c1.firebaseio.com/peliculas/";

function elegirOpcion(generos) {
  let listaOpciones = generos.map((gen, pos) => `${pos} (${gen})`).join(', ');

  return parseInt(prompt(`Elige el genero de las peliculas: ${listaOpciones}`))
}

function getGeneros() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', URL_GENEROS);

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4) {
      let generos = JSON.parse(xhr.responseText);
      let opcion = elegirOpcion(generos);
      getPeliculasPorGenero(generos[opcion]);
    }
  });

  xhr.send();
}

function getPeliculasPorGenero(genero) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', URL_PELICULAS+genero+'.json');

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      let peliculas = JSON.parse(xhr.responseText);
      console.log(peliculas);
      for (let id in peliculas) {
        console.log(`Las peliculas del genero ${genero} son: ${peliculas[id].join(', ')}`)
      }
    }
  });

  xhr.send();
}

getGeneros();*/

