function mostrarPopup(){
    let ocultar = document.getElementById('principal')
    let mostrar = document.getElementById('popup')
    ocultar.style.display = 'none'
    mostrar.style.display = 'flex'
}

document.getElementById('add').addEventListener('click', function(event){
    event.preventDefault()
    let categoria = document.getElementById('categoria').value
    let producto = document.getElementById('producto').value
    let descripcion = document.getElementById('descripcion').value
    if(producto != '' && categoria != ''){
        let nuevoProducto = `<li><img src=${categoria} alt="icono de la categoria" class="icono">
            <h4>${producto}</h4>
            <button class="btn-detalle" onclick="ventanita('${categoria}', '${producto}', '${descripcion}')">
                <img src="images/flecha.png" alt="icono de flecha" class="icono" id="flecha">
            </button>
        </li>`
    let padre = document.getElementById('agregados').innerHTML += nuevoProducto
    console.log('Agregaste un producto nuevo')  
    nuevaLista()
    }
    else{
        document.getElementById('mensaje').innerHTML = 'Completar los campos requeridos*'
    }
    document.getElementById('formPopup').reset();
})


function nuevaLista(){
    let mostrarLista = document.getElementById('lista')
    let ocultarInicio = document.getElementById('inicio')
    let mostrarPpal = document.getElementById('principal')
    let ocultarPopup = document.getElementById('popup')
    mostrarLista.style.display = 'flex'
    ocultarInicio.style.display = 'none'
    mostrarPpal.style.display = 'flex'
    ocultarPopup.style.display = 'none'
}

function ventanita(categoria, producto, descripcion){
    let newProd = `<div class="lista-detalle">
        <div class="icono-detalle">
            <img src="${categoria}" alt="icono de la categoria">
            <button class="cerrar" onclick="cerrar()" id="cerrar">x</button>
        </div>
        <h2>${producto}</h2>
        <p>${descripcion}</p>
    </div>`
    console.log('Mostrando el detalle de la lista anterior')
    detalle.innerHTML = newProd

    let mostrarDetalle = document.getElementById('detalle')
    let mostrarLista = document.getElementById('lista')
    mostrarLista.style.display = 'none'
    mostrarDetalle.style.display = 'flex'
}

function cerrar(){
    let cerrarDetalle = document.getElementById('detalle')
    let mostrarLista = document.getElementById('lista')
    mostrarLista.style.display = 'flex'
    cerrarDetalle.style.display = 'none'
}