/*

El DOM = document object model  modelo objeto del documento 

Objeto en Javascript, por lo tanto va a tener propiedades y comportamientos asociados.

atributos y funciones (métodos)


Es en forma más sencilla una variable en JS que va a traer una abstracción de mi documento de HTML
*/
const nombre = "Elvira";
let edad = 25;

// tipo de cajón
// {}
const scoobyDoo = {
    raza: "Gran danés",
    noPatas: 4,
    puedeHablar: true,
    color: "café con manchas"
}

// no funciona scoobyDoo = algo
scoobyDoo.color = "café con manchas negras"

// alert('Hola mundo')
console.log("hola mundo", nombre)
// document.write("hola mundo")


let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Elvira Montserrat Cordon Herrera ')
    .deleteChars(40)
    .pauseFor(100)
    .start();