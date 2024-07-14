const urlParams = new URLSearchParams(window.location.search); //URLSearchParams es una interfaz que permite trabajar con los parámetros de búsqueda de una URL. windowsLocationSearch devuelve todo lo que sigue despues del "?".
    const movieId = urlParams.get('id');// con el metodo get se obtiene el valor del parametro especificado osea el id.

    console.log(movieId);


function peliculaFiltrada(movieId){

    let peliculaDetalle = data.filter(item => item.id === movieId) ;
    createDetailsCard(peliculaDetalle[0])// peliculaDetalle es un array que contiene solo un objeto.le pasa como argumento el primer elemento del arrya pelicula detalle.
    console.log(peliculaDetalle);

}

peliculaFiltrada(movieId);


function createDetailsCard(peliculaDetalle){
    let contenedorDetalle = document.getElementById("detail_container");
    

let card = `<div class=" m-auto border-black border-2 mt-5 mb-10  flex  items-start justify-beetwen w-11/12 h-full text-center bg-violet-200 ">
    <img src =${peliculaDetalle.image} class="h-64 w-80 object-cover  sm: w-60 h-28"  alt = ${peliculaDetalle.title}/>
    <div class="flex flex-col h-auto w-4/5  item-center justify-start border-black border-2 bg-green-400">
    <h1 class=" font-bold text-3xl m-5">${peliculaDetalle.title}</h1>
    <h2 class=" font-bold text-xl m-5 ">${peliculaDetalle.tagline}</h2>
    <h3 class=" font-bold text-xl m-5">${peliculaDetalle.genres}</h3>
    <p class=" font-bold text-xl m-5">${peliculaDetalle.overview}</p>
    </div>


    </div>
`

contenedorDetalle.innerHTML += card;
    crearTabla(contenedorDetalle,peliculaDetalle)//le estamos pasando el contenedor y todos los datos de la pelicula
}

function crearTabla(contenedorDetalle,peliculaDetalle){


let tablas  =  `<div class=" flex  justify-evenly "> 
<table class=" bg-white border-2 border-gray-200 rounded-lg shadow-md ">
	<tbody>
		<tr class="border-2 border-black ">
			<td class="px-4 py-2 text-left text-gray-700 font-medium"> original languaje</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.original_language}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 py-2 text-left text-gray-700 font-medium">realese data</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.release_date}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 py-2 text-left text-gray-700 font-medium">runtime</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.runtime}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 py-2 text-left text-gray-700 font-medium">status</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.status}</td>
		</tr>
	</tbody>
    </table>
    
    <table class=" bg-white  border-2 border-gray-200 rounded-lg shadow-md" >
	<tbody>
		
		<tr class="border-2 border-black">
			<td class="px-4 py-2 text-left text-gray-700 font-medium">vote overage</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.vote_average}</td>
		</tr>
		<tr class="border-2 border-black">
			<td class="px-4 py-2 text-left text-gray-700 font-medium">budget</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.budget}</td>
		</tr>
		<tr class="border-2 border-black" >
			<td class="px-4 py-2 text-left text-gray-700 font-medium">revenue</td>
			<td class="px-4 py-2 text-gray-600">${peliculaDetalle.revenue}</td>
		</tr>
	</tbody>
</table> 
    
    
    </div>

`
    contenedorDetalle.innerHTML += tablas;

}