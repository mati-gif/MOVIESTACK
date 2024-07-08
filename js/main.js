

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




for(let i = 0; i < data.length ;i++ ){


    let respuesta = createCards(data[i].title,data[i].image,data[i].tagline,data[i].overview);

    divCreado.innerHTML += respuesta;// estoy agregando al nuevo div lo que hay en la funcion createCards
    

}


divCreado.classList.add("flex");
divCreado.classList.add("justify-center");
divCreado.classList.add("flex-wrap");
console.log(divCreado);










