const URL_GENEROS = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
const URL_PELICULAS = "https://ejemplos-dc1c1.firebaseio.com/peliculas/";



function getDato(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n % 2 === 0){
                resolve("Es un número válido");
            }else if(n>100){
                resolve("");
            }            else{
                reject("No es un número par")
            }
        }, 2000);
    });
}

getDato(4)
    .then(msg => {
        console.log("MSG: ", msg);
    })
    .catch(err => console.log(err => console.log("Err: ",err)));


/*function elegirOpcion(generos) {
    let listaOpciones = generos.map((gen, pos) => `${pos} (${gen})`).join(', ');
  
    return parseInt(prompt(`Elige el genero de las peliculas: ${listaOpciones}`))
}

function getGeneros(){
    fetch(URL_GENEROS)
        .then((resp) => {
            //console.log(datos);
            //console.log(resp.json());
            return resp.json();
        })
        .then((generos) => {
            console.log(generos);
            let opcion =elegirOpcion(generos);
            console.log(generos[opcion]);
        });//Todo va bien entonces se llama a esta funcion
        //fetch es una promesa
}

function getPeliculasPorGenero(genero) {
    fetch(URL_PELICULAS+genero+".json")
    .then(resp => resp.json())
    .then(peliculas => {
        //console.log(peliculas);
        for (let id in peliculas) {
            console.log(`Las peliculas del genero ${genero} son: ${peliculas[id].join(', ')}`)
        }
    })
    .catch(err => {
        console.err("Error: ", err);
    });
}

getGeneros();*/


