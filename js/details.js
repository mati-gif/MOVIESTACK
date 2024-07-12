const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    console.log(movieId);


function peliculaFiltrada(movieId){

    let peliculaDetalle = data.filter(item => item.id === movieId) ;

    console.log(peliculaDetalle);

}

peliculaFiltrada(movieId);

console.log(data);