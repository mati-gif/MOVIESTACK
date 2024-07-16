// const API_KEY = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';










// function createCards(peliculas) {
//     let card = `
//     <div class="border-black border-2 m-5  flex flex-wrap items-center justify-between w-1/5 text-center bg-green-200 ">
//         <a href="./detail.html?id=${peliculas.id}">
//             <img src="https://moviestack.onrender.com/static/${peliculas.image}" class="h-40 w-80 object-cover sm:w-60 h-28" alt="${peliculas.title}" />
//             <h4 class="font-bold">${peliculas.title}</h4>
//             <p class="p-2 text-xs font-bold sm:p-1">${peliculas.tagline}</p>
//             <p class="p-3 text-xs font-bold sm:p-1">${peliculas.overview}</p>
//         </a>
//         <div class="flex justify-center bg-green-200 w-14 border-black border-[3px] mt-auto hover:bg-gray-800 hover:border-black hover:border-2 hover:text-gray-50 active:bg-gray-800 active:text-gray-50">
//             <button id="button" class="text-4xl">♡</button>
//         </div>
//     </div>
//     `;
//     return card;
// }



// fetch('https://moviestack.onrender.com/api/movies', {
//     method: 'GET',
//     headers: {
//         'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
//     }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data.movies);
//     addCards(data.movies);
// })
// .catch(error => console.warn(error))
// .finally(() => {
//     console.log("finally is here");
// });






// function addCards(arrayPeliculas) {
//     let divCreado = document.getElementById("container_favs");
//     // divCreado.innerHTML = '';

//     let respuesta = "";
//     console.log(arrayPeliculas);
//     arrayPeliculas.forEach(item => {
//         respuesta += createCards(item);
//     });
//     divCreado.innerHTML = respuesta;
// }
