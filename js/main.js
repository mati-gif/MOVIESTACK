

let divCreado = document.getElementById("container_card");


function createCards(title,imagen,tagline,overview){

    let card = `
    <div class=" border-black border-2 m-5 h-auto flex flex-col items-center justify-beetwen w-80 text-center bg-violet-200  sm: w-4/6 h-5/6">
    <img src =${imagen} class="h-40 w-80 object-cover  sm: w-60 h-28"  alt = ${title}/>
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
    let respuesta = "" ;
    arrayPeliculas.forEach(item => {
        respuesta += createCards(item.title,item.image,item.tagline,item.overview);

    

    

    });

    divCreado.innerHTML = respuesta;

}

addCards(data);


divCreado.classList.add("flex","justify-center","flex-wrap")

console.log(divCreado);

//---creando los option y los imput---//

let containerDiv = document.querySelector(".container_div");
console.log(containerDiv);
let selectOption = document.createElement("select");
selectOption.classList.add("select");
console.log(selectOption);
containerDiv.appendChild(selectOption);
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





//forma1:
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

    genero.forEach((genre, numero) => {
        let option = document.createElement('option');
        option.value = numero;
        option.innerHTML = genre;
        select.appendChild(option);
    });
}

createOptions(eliminarDuplicados);







