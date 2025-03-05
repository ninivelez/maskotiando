document.querySelector('h1').addEventListener('click',()=> {
    document.body.style.background = 'violet';
})

function subscribe() {
    const email = document.getElementById('email').value;
    alert('Suscripción correcta con el email: ' + email)
}

function mover(direccion) {
    const carrusel = document.querySelector('.carrusel');
    const imagenes = document.querySelectorAll('.carrusel img');
    index += direccion;
    if (index < 0) index = imagenes.length - 1;
    if (index >= imagenes.length) index = 0;
    carrusel.style.transform = `translateX(-${index * 400}px)`;
}