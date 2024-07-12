

let divCreado = document.getElementById("container_card");


function createCards(title,image,tagline,overview){

    let card = `
    <div class=" border-black border-2 m-5 h-auto flex flex-col items-center justify-beetwen w-80 text-center bg-violet-200  sm: w-4/6 h-5/6">
    <img src =${image} class="h-40 w-80 object-cover  sm: w-60 h-28"  alt = ${title}/>
    <h4 class=" font-bold">${title}</h4>
    <p class="p-2 text-xs font-bolder sm: p-1">
    ${tagline}
    </p>
    <p class="p-3 text-xs font-bolder sm: p-1">
    ${overview}
    </p>
    </div>
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
        respuesta += createCards(item.title,item.image,item.tagline,item.overview);

    

    

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
        optionInicial.innerHTML = "elige el genero";
        optionInicial.value = "genero";
        select.appendChild(optionInicial);

        
    genero.forEach((genre, numero) => {

        let option = document.createElement('option');
        // option.innerHTML = "elige el genero";
        option.value = genre;
        option.innerHTML = genre;
        select.appendChild(option);
    });
}

createOptions(eliminarDuplicados);








//------CREANDO EL EVENTO ( SELECT =>  OPTIONS ) PARA QUE CUANDO SE HAGA CLICK EN UN GENERO APAREZCAN LAS PELICULAS QUE TIENEN ESE GENERO ----//.


// let divCread = document.querySelector(".container_div");


// function callBackEventSelect(evento){

//     let select = evento.target.value;
//     console.log(select);



//     let inputValue = document.getElementById("input-text").value
//     console.log(inputValue);




//     let filterMovies = data.filter(movie => movie.genres.includes(select));


//         if(inputValue !== ""){
//             filterMovies.filter(movie => movie.genres === select)
//             .filter(movie => movie.title.includes(inputValue))


//             console.log(filterMovies);

//     }

//     addCards(filterMovies);

//     console.log(filterMovies);

//     return filterMovies;
// }

let callBackEventSelect = (evento) =>{

    let select = evento.target.value;
    console.log(select);
    let arrayOrdenado = filtrarPeliculasPorGenero(select);
    addCards(arrayOrdenado)

}

let selectOpciones = document.querySelector(".select");
selectOpciones.addEventListener("input",callBackEventSelect);


    function filtrarPeliculasPorGenero(select) {

        // let select = evento.target.value;

    // let select = document.querySelector(".select").value.toLowerCase();
        // console.log(select);
    // let inputValue = document.getElementById("input-text").value.toLowerCase();
    // console.log(inputValue);

    // let filterMovies = data.filter(movie => 
    //     movie.genres.some(genre => genre.toLowerCase().includes(select)) &&
    //     movie.title.toLowerCase().includes(inputValue));

    // if (inputValue !== "") {
    //     filterMovies = data.filter(movie => movie.title.toLowerCase().includes(select));
    // }


    // console.log(filterMovies);

    let filterMovies = data.filter(movie => movie.genres.includes(select));
    addCards(filterMovies);


    return filterMovies;
}









// console.log(selectOpciones);









//------CREANDO EL EVENTO (  ===> INPUT <===  ) PARA QUE CUANDO ESCRIBA EL TITULO DE LA PELICULA APAREZCA LA PELI CON ESE NOMBRE.----//.
//-----------------------


// function callBackEventInput(evento){


//     let input = evento.target.value.toLowerCase();
//     console.log(input);


//     let filterSearch = data.filter(movie => movie.title.toLowerCase().includes(input));


//     // addCards(filterSearch);

//         let selectInput = document.querySelector("select").value;
//         console.log(selectInput);


//     let movieContainer = document.getElementById("container_card");
//     movieContainer.innerHTML = "";


//     if(filterSearch.length > 0){


//         if( selectInput !== "genero"){
//             let filtroCruzado = filterSearch.filter(movie => movie.genres === selectInput);
//             console.log(filtroCruzado);
//             addCards(filtroCruzado);

//         } else {
//             addCards(filterSearch)
//             console.log("entro en en el else");
//         }

//     } else{

//         let parrafo = document.createElement("p");
//         parrafo.textContent = "pelicula no encontrada"

//         movieContainer.appendChild(parrafo); 


//     }




//     return filterSearch;

// }
let callBackEventInput = (evento) =>{

    // let input = evento.target.value;
    // console.log(input);
    // let arrayOrdenado = filtrarPeliculasPorNombre();
    // addCards(arrayOrdenado)

}

    let buscarPelis = document.getElementById("input-text");
    console.log(buscarPelis);
    buscarPelis.addEventListener("input",filtrarPeliculasPorNombre);







    function filtrarPeliculasPorNombre(evento) {
        let input = evento.target.value.toLowerCase();
        console.log(input);
    
        let filterSearch = data.filter(movie => movie.title.toLowerCase().includes(input));
        console.log(filterSearch);
        // let selectInput = document.querySelector("select").value;
        // console.log(selectInput);
    
        let movieContainer = document.getElementById("container_card");
        movieContainer.innerHTML = "";
    
        // if (filterSearch.length > 0) {
        //     if (selectInput !== "genero" && selectInput !== "") {
        //         let filtroCruzado = filterSearch.filter(movie => movie.genres.includes(selectInput));
        //         console.log(filtroCruzado);
        //         addCards(filtroCruzado);
        //     } else {
        //         addCards(filterSearch);
        //         console.log("entro en en el else");
        //     }
        // } else {
        //     let parrafo = document.createElement("p");
        //     parrafo.textContent = "película no encontrada";
        //     movieContainer.appendChild(parrafo);
        //     console.log("entro en en el else del if principal");

        // }

    //       if (filterSearch.length === 0) {
    //     let messageElement = document.getElementById("message");
    //     if (!messageElement) {
    //         messageElement = document.createElement("p");
    //         messageElement.id = "message";
    //         messageElement.textContent = "no se encuentra la película buscada";
    //         document.body.appendChild(messageElement);
    //     }
    // } else {
    //     let messageElement = document.getElementById("message");
    //     if (messageElement) {
    //         messageElement.remove();
    //     }
    // // }



    }

































// const aplicarFiltros = () => {
//     const selectedGenre = selectOption.value;
//     const searchTerm = inputText.value.toLowerCase();
  
//     const peliculasFiltradas = data.filter((movie) => {
//       const matchesGenre =  movie.genres.includes(selectedGenre);
//       const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm);
//       console.log(matchesGenre, matchesSearchTerm);
//       return matchesGenre && matchesSearchTerm;

//     });
//     console.log(peliculasFiltradas);
    
//     divCreado.innerHTML =  createCards(peliculasFiltradas);

//   };



























// document.addEventListener("DOMContentLoaded", () => {
//     let divCreado = document.getElementById("container_card");

//     function createCards(title, image, tagline, overview) {
//         let card = `
//         <a href="../index.html" >
//         <div class="border-black border-2 m-5 h-auto flex flex-col items-center justify-between w-80 text-center bg-violet-200 sm:w-4/6 h-5/6">
//             <img src="${image}" class="h-40 w-80 object-cover sm:w-60 h-28" alt="${title}"/>
//             <h4 class="font-bold">${title}</h4>
//             <p class="p-2 text-xs font-bolder sm:p-1">${tagline}</p>
//             <p class="p-3 text-xs font-bolder sm:p-1">${overview}</p>
//         </div>
//         </a>`;
//         return card;
//     }

//     function addCards(arrayPeliculas) {
//         divCreado.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas
//         let respuesta = '';
//         arrayPeliculas.forEach(item => {
//             respuesta += createCards(item.title, item.image, item.tagline, item.overview);
//         });
//         divCreado.innerHTML = respuesta;
//     }

//     function createOptions(genero) {
//         let select = document.querySelector(".select");
//         select.innerHTML = ''; // Eliminar todas las opciones existentes antes de agregar las nuevas
//         let defaultOption = document.createElement('option');
//         defaultOption.value = '';
//         defaultOption.innerHTML = 'Selecciona un género';
//         select.appendChild(defaultOption);

//         genero.forEach((genre) => {
//             let option = document.createElement('option');
//             option.value = genre;
//             option.innerHTML = genre;
//             select.appendChild(option);
//         });
//     }

//     // Crear y agregar input y select
//     let label = document.getElementById("label");
//     let selectOption = document.createElement("select");
//     selectOption.classList.add("select");
//     label.appendChild(selectOption);

//     let inputText = document.createElement("input");
//     inputText.type = "text";
//     inputText.id = "input-text";
//     inputText.placeholder = "search";
//     inputText.classList.add("ml-20");
//     label.appendChild(inputText);

//     // Filtrar y eliminar duplicados de los géneros
//     let capturarGeneros = data.flatMap(genero => genero.genres);
//     let eliminarDuplicados = [...new Set(capturarGeneros)];

//     createOptions(eliminarDuplicados);

    // function aplicarFiltros() {
    //     const selectedGenre = selectOpciones.value;
    //     const searchTerm = inputText.value.toLowerCase();

    //     const peliculasFiltradas = data.filter((movie) => {
    //         const matchesGenre = !selectedGenre || movie.genres.includes(selectedGenre);
    //         const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm);
    //         return matchesGenre && matchesSearchTerm;
    //     });

    //     if (peliculasFiltradas.length > 0) {
    //         addCards(peliculasFiltradas);
    //     } else {
    //         divCreado.innerHTML = '<p>Película no encontrada</p>';
    //     }
    // }

//     // Event listeners
//     selectOption.addEventListener("input", aplicarFiltros);
//     inputText.addEventListener("input", aplicarFiltros);

//     // Inicializar con todas las películas
//     addCards(data);
// });

