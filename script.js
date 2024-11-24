/* CARRUSEL PRINCIPAL - INICIO*/
const imagenesCarruselInicio = document.querySelectorAll('.imagen-carrusel-inicio');
const botonesCarruselInicio = document.querySelectorAll('.boton-carrusel-inicio');
let indiceCarruselInicio = 0;
let intervaloCarrusel;

// Función para mostrar la imagen en el índice actual
const mostrarImagenCarrusel = (indice) => {
    imagenesCarruselInicio.forEach((img, i) => {
        img.classList.toggle('visible', i === indice);
    });
};

// Función para avanzar al siguiente slide
const avanzarCarrusel = () => {
    indiceCarruselInicio = (indiceCarruselInicio + 1) % imagenesCarruselInicio.length;
    mostrarImagenCarrusel(indiceCarruselInicio);
};

// Función para retroceder al slide anterior
const retrocederCarrusel = () => {
    indiceCarruselInicio = (indiceCarruselInicio - 1 + imagenesCarruselInicio.length) % imagenesCarruselInicio.length;
    mostrarImagenCarrusel(indiceCarruselInicio);
};

// Configuración de botones
botonesCarruselInicio.forEach((boton) => {
    boton.addEventListener('click', () => {
        clearInterval(intervaloCarrusel); // Detener el cambio automático temporalmente
        if (boton.classList.contains('izquierdo')) {
            retrocederCarrusel();
        } else {
            avanzarCarrusel();
        }
        iniciarCarruselAutomatico(); // Reiniciar el cambio automático
    });
});

// Iniciar cambio automático
const iniciarCarruselAutomatico = () => {
    intervaloCarrusel = setInterval(avanzarCarrusel, 4000); // Cambia cada 4 segundos
};

// Inicia el carrusel al cargar la página
iniciarCarruselAutomatico();





/* CARRUSEL PRODUCTOS - INICIO */
const contenedorProductos = document.querySelector('.contenedor-productos');
const productos = document.querySelectorAll('.producto');
const botonIzquierdoProductos = document.querySelector('.boton-carrusel.izquierdo');
const botonDerechoProductos = document.querySelector('.boton-carrusel.derecho');

let indiceProducto = 0;

// Mostrar productos
const mostrarProductos = () => {
    const tamañoProducto = productos[0].offsetWidth + 20; // Ancho del producto + margen
    contenedorProductos.style.transform = `translateX(-${indiceProducto * tamañoProducto}px)`;
};

// Avanzar al siguiente producto
const avanzarProductos = () => {
    if (indiceProducto < productos.length - 1) {
        indiceProducto++;
    } else {
        indiceProducto = 0; // Reinicia el carrusel
    }
    mostrarProductos();
};

// Retroceder al producto anterior
const retrocederProductos = () => {
    if (indiceProducto > 0) {
        indiceProducto--;
    } else {
        indiceProducto = productos.length - 1; // Mueve al último producto
    }
    mostrarProductos();
};

// Eventos de los botones
botonIzquierdoProductos.addEventListener('click', retrocederProductos);
botonDerechoProductos.addEventListener('click', avanzarProductos);

// Movimiento automático (opcional)
setInterval(avanzarProductos, 5000); // Cambia cada 5 segundos