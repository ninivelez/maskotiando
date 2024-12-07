document.querySelector('h1').addEventListener('click',()=> {
    document.body.style.background = 'violet';
})
// document.getElementById('image').addEventListener('click',()=> {
    // document.body.style.background = 'violet';

var imagenes = ['imagenes/perro1.png,imagenes/pg.png,imagenes/productos2.png,imagenes/productos3.png'],
    cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('adelante'),
            imagenes = contenedor.querySelector('imagenes'),
            tgt = e.target;

        if(tgt == atras)}{
            if(cont >0){
                img.src = imagenes[cont - 1];
                cont --;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            } 

        } else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont ++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            } 
    }

    );

}

document.addEventListener("DOMcontentLoaded",() => {
    let contenedor = document.querySelector('contenedor');

    carrusel(contenedor);

}
);