const API_KEY = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';


//(NO PRESTARLE ATENCION)

// function createCards(peliculas) {
//     let respuesta = "";
//     peliculas.forEach(pelicula => {
//         respuesta += `
//             <div class=" border-black border-2  m-5 h-auto flex flex-col items-center justify-beetwen w-80 text-center bg-yellow-200  sm: w-4/6 h-5/6">
//                 <a href="./detail.html?id=${pelicula.id}">
//                     <img src="https://moviestack.onrender.com/static/${pelicula.image}" class="h-40 w-80 object-cover  sm: w-60 h-28" alt="${pelicula.title}">
//                     <h4 class="font-bold">${pelicula.title}</h4>
//                     <p class="p-2 text-xs font-bold sm:p-1">${pelicula.tagline}</p>
//                     <p class="p-3 text-xs font-bold sm:p-1">${pelicula.overview}</p>
//                 </a>
//                 <div class="flex justify-center w-12 border-black border-[3px] mt-auto hover:border-black hover:border-2 hover:text-gray-50">
//                     <button data-vote="true" data-id="${pelicula.id}" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 text-black">♡</button>
//                 </div>
//             </div>`;
//     });
//     return respuesta;
// }

// function addCards(arrayPeliculas) {
//     let divCreado = document.getElementById("container_favs");
//     // if (!divCreado) {
//     //     console.error("El contenedor 'container_favs' no se encontró en el DOM.");
//     //     return;
//     // }

//     divCreado.innerHTML = createCards(arrayPeliculas);
// }

//--------------------------------------------------------------------------------------------

function createCards(pelicula) {
        let card = `
                <div class=" border-black border-2  m-5 h-auto flex flex-col items-center justify-beetwen w-80 text-center bg-yellow-200  sm: w-4/6 h-5/6">
                    <a href="./detail.html?id=${pelicula.id}">
                        <img src="https://moviestack.onrender.com/static/${pelicula.image}" class="h-40 w-80 object-cover  sm: w-60 h-28" alt="${pelicula.title}">
                        <h4 class="font-bold">${pelicula.title}</h4>
                        <p class="p-2 text-xs font-bold sm:p-1">${pelicula.tagline}</p>
                        <p class="p-3 text-xs font-bold sm:p-1">${pelicula.overview}</p>
                    </a>
                    <div class="flex justify-center w-12 border-black border-[3px] mt-auto hover:border-black hover:border-2 hover:text-gray-50">
                        <button data-vote="true" data-id="${pelicula.id}" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 text-black">♡</button>
                    </div>
                </div>`;
        ;
        return card;
    }


function addCards(arrayPeliculas) {
    let divCreado = document.getElementById("container_favs");

    divCreado.innerHTML = '';
    let respuesta = "";

    arrayPeliculas.forEach(item => {// Se utiliza forEach para iterar sobre cada objeto de película en arrayPeliculas
        respuesta += createCards(item); //el html generado por createCards se concatena a la variable respuesta.
    });
    divCreado.innerHTML += respuesta;
}





let divCreado = document.getElementById("container_favs");

fetch('https://moviestack.onrender.com/api/movies', {
    method: 'GET',
    headers: {
        'x-api-key': API_KEY
    }
})
.then(response => response.json())//se maneja la respuesta del fetch y luego  se convierte en formato json.
.then(data => {
    let allMovies = data.movies;
    getFavorites(allMovies);
    divCreado.addEventListener("click", (evento) => verifyButtonAndFavorite(evento, allMovies));
})
.catch(error => {
    console.warn(error);
});




//sirve para  filtrar y mostrar la lista de películas favoritas basándose en los datos de localStorage.
//permite mostrar solo las películas favoritas de un usuario, recuperándolas del localStorage  y volviendola mostrar en pantalla.
//recupera la lista de favoritos del localStorage ,filtra las peliculas de allMovies para incluir solo la que estan en favoritos y llama a addCards para mostrarlas
function getFavorites(allMovies) { //recibe como parametro un array con las peliculas.
    let arrayFavoritos;

    if (localStorage.getItem("favoritos")) {
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    } else {
        arrayFavoritos = [];
    }

    let arrayFiltrado = allMovies.filter(movie => arrayFavoritos.includes(movie.id));//La función filter recorre allMovies y selecciona sólo aquellas películas cuyos id están en arrayFavoritos.
    // Es decir, se seleccionan sólo las películas que están marcadas como favoritas.
    addCards(arrayFiltrado);//se llama a la función addCards con el array filtrado de películas favoritas 
}


//esta función gestiona el evento de click en los botones de like de las películas, alterna el estado de favorito de la película correspondiente y actualiza la lista de películas favoritas en la interfaz de usuario.
//es decir verifica si el elemento que disparo el evento ( el click) es un boton de favorio
function verifyButtonAndFavorite(evento, allMovies) {//recibe como parametro el evento que desencadena la funcion y allMovies es un array que contiene todas las peliculas
    let esBotonLike = evento.target.dataset.vote;//accede al atributo data-vote
    let idPelicula = evento.target.dataset.id;//accede al atributos data-id
    console.log(esBotonLike);
    console.log(idPelicula);
    if (esBotonLike) {
        toggleFavorites(idPelicula);//llama a la funcion toggleFavorites que recibe como argumento el idPeliculas que cambia el estado de favorito de la película (agregando o eliminando su id de la lista de favoritos en localStorage).
        getFavorites(allMovies); // Actualiza la lista de películas favoritas después de cambiar el estado del botón y las muestra en la interfaz de usuario.
    }
}



//sirve para alternar el estado de favorito de  una pelicula en la lista de favoritos almacenada en localStorage
//osea esta función permite a los usuarios marcar o desmarcar películas como favoritas, actualizando el localStorage.
//es decir añade o elimina el id de la pelicula del array arrayfavorites .
function toggleFavorites(idPelicula) {
    let arrayFavoritos;// almacena el array de IDs de películas favoritas.

    if (localStorage.getItem("favoritos")) {
        arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    } else {
        arrayFavoritos = [];
    }

    if (arrayFavoritos.includes(idPelicula)) {//si idPelicula esta en el arrayFavoritos, es decir si ya esta dado el like
        // arrayFavoritos = arrayFavoritos.filter(id => id !== idPelicula);
        arrayFavoritos.splice( arrayFavoritos.indexOf(idPelicula),1 )
    } else {
        arrayFavoritos.push(idPelicula);
    }

    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos));//se actualiza el localStorage con con el nuevo contenido de arrayFavoritos y  JSON.stringify(arrayFavoritos) convierte arrayFavoritos a una string JSON antes de almacenarlo en el localStorage.
}







//HACIENDO EL BOTON PARA ELIMINAR LAS CARTAS DE FAVORITOS.

let botonResete = document.querySelector(".boton-reset");
console.log(botonResete);
botonResete.addEventListener("click",callBackReset)


function callBackReset(){

    let div = document.getElementById("container_favs");

    console.log(div);

div.innerHTML = "";

    console.log("holaaaaaa a todods ");


    localStorage.removeItem("favoritos");



}