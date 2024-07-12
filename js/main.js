

let divCreado = document.getElementById("container_card");


function createCards(id,title,image,tagline,overview){

    let card = `
    <a href="./detail.html?id=${id}"><div class=" border-black border-2 m-5 h-auto flex flex-col items-center justify-beetwen w-80 text-center bg-violet-200  sm: w-4/6 h-5/6">
    <img src =${image} class="h-40 w-80 object-cover  sm: w-60 h-28"  alt = ${title}/>
    <h4 class=" font-bold">${title}</h4>
    <p class="p-2 text-xs font-bolder sm: p-1">
    ${tagline}
    </p>
    <p class="p-3 text-xs font-bolder sm: p-1">
    ${overview}
    </p>
    </div></a>
    `

    return card;

}



//forma 1 : usar el bucle for para recorrer todo el array de peliculas.
// for(let i = 0; i < data.length ;i++ ){


//     let respuesta = createCards(data[i].title,data[i].image,data[i].tagline,data[i].overview);

//     divCreado.innerHTML += respuesta;// estoy agregando al nuevo div lo que hay en la funcion createCards
    

// }


//forma2: crear una funcion que recibe un parametro (el array de peliculas) que adentro tenga un forEach() que tambien va a recorrer el array de peliculas y va a devolver la tarjeta solo con las propiedadess que le estoy pasando en el foreach .

function addCards(arrayPeliculas){


    divCreado.innerHTML = '';

    let respuesta = "" ;
    arrayPeliculas.forEach(item => {
        respuesta += createCards(item.id,item.title,item.image,item.tagline,item.overview);

    

    

    });
    divCreado.innerHTML +=  respuesta;


}



addCards(data);


divCreado.classList.add("flex","justify-center","flex-wrap")

console.log(divCreado);

//---creando los option y los imput---//

let containerDiv = document.querySelector(".container_div");
containerDiv.classList.add("flex","justify-center");
// containerDiv.innerHTML = "<label> Filtrar:</label>"
let label = document.getElementById("label");
let selectOption = document.createElement("select");
selectOption.classList.add("select");
console.log(selectOption);
label.appendChild(selectOption);
console.log(containerDiv);


let inputText = document.createElement("input");
inputText.type = "text";
inputText.id = "input-text";
inputText.value = "";
inputText.placeholder = "search"
inputText.classList.add("ml-20")
label.appendChild(inputText);

console.log(containerDiv);

let capturarGeneros  = data.map((genero)=>{
    let generosCapturados = genero.genres
    return  generosCapturados
} );


let allGenres = [];

capturarGeneros.forEach(item => {

    allGenres = allGenres.concat(item);
})

console.log(allGenres);


let eliminarDuplicados = [];

allGenres.forEach(genre =>{
    if(!eliminarDuplicados.includes(genre)){


        eliminarDuplicados.push(genre)
    }

});

console.log(eliminarDuplicados);

// console.log(new Set (capturarGeneros.flat())); //el metodo flat() une todos los arrays en uno solo, mientras que el metodo newSet no perimite elementos repeidos dentro de un array.





//forma1:(no prestarle atencion porque probablemente esta mal)
// function createOptions(genero,valor){

// let option = `
//  <option value =${valor} >${genero}</option>

// `
// return option

// }






//forma 2:

function createOptions(genero) {
    let select = document.querySelector(".select");

     select.innerHTML = ''; //elimina todas las opciones existentes antes de agregar las nuevas, asegurando que no haya opciones duplicadas ni acumulación innecesaria de opciones.
    let optionInicial  = document.createElement('option');
        optionInicial.textContent = "elige el genero";
        optionInicial.value = "genero";
        select.appendChild(optionInicial);

        
    genero.forEach((genre) => {

        let option = document.createElement('option');
        // option.innerHTML = "elige el genero";
        option.value = genre;
        option.innerHTML = genre;
        select.appendChild(option);
    });
}

createOptions(eliminarDuplicados);










//--CREANDO LA CALLBACK DEL SELECT =====> OPTION <====== //
let callBackEventSelect = (evento) =>{

    let select = evento.target.value;
    console.log(select);
    let arrayFiltrado = data;
    let arrayFiltradoPorGenero = filtrarPeliculasPorGenero(select,arrayFiltrado);
    let arrayFiltradoPorNombre = filtrarPeliculasPorNombre(buscarPelis.value,arrayFiltradoPorGenero)
    addCards(arrayFiltradoPorNombre);
    mostrarMensajeSiNoHayPeliculas(arrayFiltradoPorNombre);

}



//--CREANDO LA CALLBACK DEL INPUT =====> EL USUARIO INGRESA EL NOMBRE DE LA PELI <====== //

let callBackEventInput = (evento) =>{

    let input = evento.target.value.toLowerCase();
    console.log(input);
    let arrayFiltrado = data;
    let arrayFiltradoPorNombre = filtrarPeliculasPorNombre(input,arrayFiltrado);
    let arrayFiltradoPorGenero = filtrarPeliculasPorGenero(selectOpciones.value,arrayFiltradoPorNombre)
    addCards(arrayFiltradoPorGenero);
    mostrarMensajeSiNoHayPeliculas(arrayFiltradoPorGenero);
    // filtrarPeliculasPorNombre(input);

}




let selectOpciones = document.querySelector(".select");
selectOpciones.addEventListener("input",callBackEventSelect);



let buscarPelis = document.getElementById("input-text");
buscarPelis.addEventListener("input",callBackEventInput);











//------CREANDO EL EVENTO ( SELECT =>  OPTIONS ) PARA QUE CUANDO SE HAGA CLICK EN UN GENERO APAREZCAN LAS PELICULAS QUE TIENEN ESE GENERO ----//.


    function filtrarPeliculasPorGenero(select,array) {


    if (select === "genero" || select === "") {
        return array;
    }


    let filterMovies = array.filter((movie) =>{ 

        return movie.genres.includes(select)
    
    });


    return filterMovies;
}







//------CREANDO EL EVENTO (  ===> INPUT <===  ) PARA QUE CUANDO ESCRIBA EL TITULO DE LA PELICULA APAREZCA LA PELI CON ESE NOMBRE.----//.
//-----------------------

function filtrarPeliculasPorNombre(nombre,array) {
    


    if (nombre === "") {
        return array;
    } 
        let filterSearch = array.filter((movie) => {
        return movie.title.toLowerCase().includes(nombre)
    });
    console.log(filterSearch);
    





    return filterSearch;

}


    function mostrarMensajeSiNoHayPeliculas(movies) {
        let movieContainer = document.getElementById("container_card");
        let mensajeExistente = document.getElementById("mensaje_no_encontrado");
        console.log(mensajeExistente);
        if (mensajeExistente) {
            mensajeExistente.remove();
        }
    
        if (movies.length === 0) {
            let parrafo = document.createElement("p");
            console.log(parrafo);
            parrafo.id = "mensaje_no_encontrado";
            parrafo.textContent = "película no encontrada";
            movieContainer.appendChild(parrafo);
        }
    }




















































































