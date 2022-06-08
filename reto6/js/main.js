let welcome = document.querySelector('.welcome')
let loading = document.querySelector('.loading')
let cards = document.querySelector('.imagenes')
let popup = document.querySelector('.popup')
let resultado = document.querySelector('.resultados')
let section = document.querySelectorAll('section')

// mensaje de completar el input
let mensaje = document.querySelector('.mensaje')

// botones
let startGame = document.getElementById('btn-ppal')
let span = document.querySelector('.imagenes span')
let btnResultados = document.getElementById('btnResultados')
let btnInicio = document.getElementById('btnInicio')
let btnPartida = document.querySelector('.btn-anterior')
let guardarJuego = document.getElementById('guardarJuego')
let cerrarResultado = document.getElementById('cerrarResultado')

// variables del carousel
let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let titulo3 = document.getElementById('titulo3')
let titulo4 = document.getElementById('titulo4')
let titulo5 = document.getElementById('titulo5')
let titulo6 = document.getElementById('titulo6')

let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5')
let img6 = document.querySelector('.img6')

let texto1 = document.getElementById('texto1')
let texto2 = document.getElementById('texto2')
let texto3 = document.getElementById('texto3')
let texto4 = document.getElementById('texto4')
let texto5 = document.getElementById('texto5')
let texto6 = document.getElementById('texto6')

let nombrePlayer1 = document.querySelector('.nombrePlayer1')
let nombrePlayer2 = document.querySelector('.nombrePlayer2')
let nombrePlayer3 = document.querySelector('.nombrePlayer3')
let nombrePlayer4 = document.querySelector('.nombrePlayer4')
let nombrePlayer5 = document.querySelector('.nombrePlayer5')
let nombrePlayer6 = document.querySelector('.nombrePlayer6')

let player1 = ''
let player2 = ''

// con esto cambiamos la pantalla que se muestra
const newSection = (pantalla) => {
    section.forEach((section, index) => {
        section.style.display = 'none'
    });
    pantalla.style.display = 'flex'
    if (pantalla == loading){
        setTimeout(() => {
            newSection(cards)
        }, 3000);
    }
}

// pantalla inicial tomando jugadores para empezar juego
startGame.addEventListener('click', (e) =>{
    e.preventDefault()
    player1 = document.getElementById('player1').value
    player2 = document.getElementById('player2').value
    if(player1 != '' && player2 != '' ){
        newSection(loading)
        resetPlay()
    }
    else{
        mensaje.innerHTML = 'Completar los campos requeridos*'
    }
})

// establecido para seleccionar un random de personajes
let superRandom = (min, max) =>{
    let random = Math.round(Math.random() * (max-min) + min )
    return random
}

// establecimos la funcion jugar para llenarla de las cartas que vamos a usar
let mostrar = 0
let guardados = [];
let partidasAnteriores = []

let jugar = () =>{
    let elegidos = personajes[superRandom(0,18)]
    if(guardados.indexOf(elegidos) == -1){
        guardados.push(elegidos)
        mostrar++
    } else{
        console.log('Esta repetida esta carta: ' + elegidos)
    }
    if (mostrar<6){
        jugar()
    } else{
        console.log(guardados)
        iterarGuardados(guardados)
        partidasAnteriores.push(guardados)
    }
}

// con este cerrar vamos a la pagina de popup
span.addEventListener('click', () =>{
    let form = document.querySelector('form')
    form.reset()
    newSection(popup)
})

// boton para volver al inicio despues de jugar
btnInicio.addEventListener('click', () => {
    resetPlay()
    newSection(loading)
    setTimeout(() => {
        newSection(cards)
    }, 3000);
    mensaje = ''
})

// iterando los elementos guardados aka cartas

let iterarGuardados = (juegoCompleto) =>{
    img1.setAttribute("src", juegoCompleto[0].img)
    titulo1.innerHTML = juegoCompleto[0].name
    texto1.innerHTML = juegoCompleto[0].txt
    nombrePlayer1.innerHTML = 'Personaje 1/3 de ' + player1
    img2.setAttribute("src", juegoCompleto[1].img)
    titulo2.innerHTML = juegoCompleto[1].name
    texto2.innerHTML = juegoCompleto[1].txt
    nombrePlayer2.innerHTML = 'Personaje 2/3 de ' + player1
    img3.setAttribute("src", juegoCompleto[2].img)
    titulo3.innerHTML = juegoCompleto[2].name
    texto3.innerHTML = juegoCompleto[2].txt
    nombrePlayer3.innerHTML = 'Personaje 3/3 de ' + player1
    img4.setAttribute("src", juegoCompleto[3].img)
    titulo4.innerHTML = juegoCompleto[3].name
    texto4.innerHTML = juegoCompleto[3].txt
    nombrePlayer4.innerHTML = 'Personaje 1/3 de ' + player2
    img5.setAttribute("src", juegoCompleto[4].img)
    titulo5.innerHTML = juegoCompleto[4].name
    texto5.innerHTML = juegoCompleto[4].txt
    nombrePlayer5.innerHTML = 'Personaje 2/3 de ' + player2
    img6.setAttribute("src", juegoCompleto[5].img)
    titulo6.innerHTML = juegoCompleto[5].name
    texto6.innerHTML = juegoCompleto[5].txt
    nombrePlayer6.innerHTML = 'Personaje 3/3 de ' + player2
}

// funcion para volver a mirar resultados anteriores
// let juegoAnterior = (partida) =>{
//     iterarGuardados(partidasAnteriores[partida])
//     newSection(cards)
// }


// aca se establece la manera de guardar juego y el boton para ver la partida anterior
guardarJuego.addEventListener('click', ()=>{
    let juegosAnteriores = document.querySelector('.juegosAnteriores')
    juegosAnteriores.style.display = 'block'
    let anteriores = document.querySelector('.partidas')
    anteriores.innerHTML += `<li class="anteriores">
    <p>${player1} - ${player2}</p>
    <button type="button" class="btn-anterior" onClick="mostrarAnterior(${dataGame++})">Ver</button>
    </li>`
    newSection(welcome)
    mensaje = ''
})


// aca reseteamos el juego y le dimos inicio de nuevo
let resetPlay = () =>{
    mostrar = 0
    guardados = []
    jugar()
}

// mostrar resultados y match
btnResultados.addEventListener('click', ()=>{
    let cartasPlayer1 = document.querySelector('.cartas-player1')
    cartasPlayer1.innerHTML = `
    <h3 class="cartas-player1">Cartas de ${player1}</h3>
    <div class="resultados-img">
        <img src="${guardados[0].img}" alt="carta de player1">
        <img src="${guardados[1].img}" alt="carta de player1">
        <img src="${guardados[2].img}" alt="carta de player1">
    </div>`
    let cartasPlayer2 = document.querySelector('.cartas-player2')
    cartasPlayer2.innerHTML = `
    <h3 class="cartas-player1">Cartas de ${player2}</h3>
    <div class="resultados-img">
        <img src="${guardados[3].img}" alt="carta de player2">
        <img src="${guardados[4].img}" alt="carta de player2">
        <img src="${guardados[5].img}" alt="carta de player2">
    </div>` 
    matchPersonajes()
    newSection(resultado)
})

// funcion match
let matchPersonajes = () =>{
    let matchPantalla = document.querySelector('.match')
    let data1 = guardados[0].data + guardados [1].data + guardados [2].data
    let data2 = guardados[3].data + guardados [4].data + guardados [5].data
    if((data1 - data2) % 2){
        matchPantalla.innerHTML = `
        <h3>💕 HAY MATCH 💕</h3>
        <p>"Because today, is the day that ${player1} and ${player2} become one"</p>`
    }else{
        matchPantalla.innerHTML = `
        <h3>😢 NO HAY MATCH 😢</h3>
        <p>Aun asi pueden ser amigues...</p>`
    }
}

// boton cerrar resultados
cerrarResultado.addEventListener('click', ()=>{
    iterarGuardados(guardados)
    newSection(welcome)
})

// funcion para volver a mirar resultados anteriores
let dataGame = 0

function mostrarAnterior(partida){
    iterarGuardados(partidasAnteriores[partida])
    newSection(cards)
    guardarJuego.remove()
    // document.querySelector('.cerrar').addEventListener('click', ()=>{
    //     newSection(welcome)
    // })
}
