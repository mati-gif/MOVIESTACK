const urlParams = new URLSearchParams(window.location.search); //URLSearchParams es una interfaz que permite trabajar con los parámetros de búsqueda de una URL. windowsLocationSearch es la cadena de consulta de la url acytual, devuelve todo lo que sigue despues del "?".
    const movieId = urlParams.get('id');// con el metodo get se obtiene el valor del parametro especificado osea el id.

    console.log(movieId);


function peliculaFiltrada(movieId){//este parametro es un identificador  que se espera que coincida con el campo id de uno de los objetos en el array data

    let peliculaDetalle = data.find(item => item.id === movieId) ;// el metodo find me trae el primer objeto que cumpla con la condicion.Recorre todas las peliculas comparando con el id que traigo por el urlSearchParams.
    createDetailsCard(peliculaDetalle);// peliculaDetalle es un array que contiene solo un objeto.le pasa como argumento el primer elemento del arrya pelicula detalle.
    console.log(peliculaDetalle);
	
}

peliculaFiltrada(movieId);


function createDetailsCard(peliculaDetalle){//este paraemtro es un objeto que contiene el detalle de las peliculas.
    let contenedorDetalle = document.getElementById("detail_container");
    

let card = `<div class=" m-auto  mt-5 mb-10  flex flex-col  justify-evenly w-96  text-center  ">
    <img src =${peliculaDetalle.image} class="h-64 w-96 object-cover  sm: w-60 h-28"  alt = ${peliculaDetalle.title}/>
    

	<table class=" bg-white rounded-lg shadow-md ">
	<tbody>
		<tr class="border-2 border-black bg-green-200">
			<td class="px-4  border-2 border-black py-2 text-left text-gray-700 font-medium"> original languaje</td>
			<td class="px-4 border-2 border-black  py-2 text-gray-600">${peliculaDetalle.original_language}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 border-2 border-black py-2 text-left text-gray-700 font-medium">realese data</td>
			<td class="px-4 border-2 border-black py-2 text-gray-600">${peliculaDetalle.release_date}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 border-2 border-black py-2 text-left text-gray-700 font-medium">runtime</td>
			<td class="px-4 border-2 border-black py-2 text-gray-600">${peliculaDetalle.runtime}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 border-2 border-black py-2 text-left text-gray-700 font-medium">status</td>
			<td class="px-4 border-2 border-black py-2 text-gray-600">${peliculaDetalle.status}</td>
		</tr>
	</tbody>
    </table>

    </div>
`

contenedorDetalle.innerHTML += card;
    crearTabla(contenedorDetalle,peliculaDetalle)//le estamos pasando el contenedor y todos los datos de la pelicula
}

function crearTabla(contenedorDetalle,peliculaDetalle){


let tablas  =  `<div class=" m-auto border-black border-2 mt-5 mb-10  flex flex-col  w-2/4   "> 

    <h1 class=" font-bold text-3xl m-5">${peliculaDetalle.title}</h1>
    <h2 class=" font-bold text-xl m-5 ">${peliculaDetalle.tagline}</h2>
    <h3 class=" font-bold text-xl m-5">${peliculaDetalle.genres}</h3>
    <p class=" font-bold text-xl m-5">${peliculaDetalle.overview}</p> 

   <table class=" w-96 h-40 bg-white m-auto border-2 border-gray-200 rounded-lg shadow-md" >
	<tbody>
		
		<tr class="border-2 border-black bg-green-200">
			<td class="px-4 border-2 border-black py-2 text-left text-gray-700 font-medium">vote overage</td>
			<td class="px-4 border-2 border-black py-2 text-gray-600">${peliculaDetalle.vote_average}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 border-2 border-black py-2 text-left text-gray-700 font-medium">budget</td>
			<td class="px-4 border-2 border-black py-2 text-gray-600">${peliculaDetalle.budget}</td>
		</tr>
		<tr class="border-2 border-black" >
			<td class="px-4 border-2 border-black py-2 text-left text-gray-700 font-medium">revenue</td>
			<td class="px-4 border-2 border-black py-2 text-gray-600">${peliculaDetalle.revenue}</td>
		</tr>
	</tbody>
</table> 
    
    
    </div>

`
    contenedorDetalle.innerHTML += tablas;

}


















/* <div class="flex flex-col h-auto w-4/5  item-center justify-start border-black border-2 bg-green-400">    </div> */







