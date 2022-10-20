/* 
************************************
funciones para la pagina jugador uno
************************************
*/


let score = 0;
const startButton = document.querySelector('#start');
const grid = document.querySelector(`#juego`);
const resultado = document.querySelector(`#score`);
var tarjetasSeleccionadas = [];
var idTarjetasSeleccionadas = [];
var personajesEncontrados = [];


function saludo() {
    $('#saludo').append(localStorage.saludo)

}

saludo();



//MANIPULACIÓN DEL DOM
function crearElementosDOM() {
    $("h2").prepend('<h2 style= "display:none">STAR WARS MEMORY GAME</h2>');
    $("h2").fadeIn(4000);
    $('#saludo').append('<br><button id="btnGet">CONSOLE CHARS</button><br>');
//EVENTO GET
    $('#btnGet').click (() => {
        $.get(URL, function (respuesta, estado) {
            if(estado === "success") {
                console.log(respuesta);
                let data = respuesta.results;
                console.log(data);
                $('#btnGet').hide();
                for (const dato of data) {
                    console.log(`${dato,name}`);
                }
            }
        })
    });
}
crearElementosDOM();

function instrucciones() {
    //CREACIÓN DE BOTÓN MOSTRAR CONTROLES Y EVENTO SHOW()
        $('.instrucciones').append('<br><h4 id="instrucciones" style= display:none>Deberás encontrar a 10 personajes de la gran saga de Star Wars en el menor tiempo posible. Para ello, haz click en las tarjetas para darlas vuelta y encontrar su respectivo par. <br>¡Que la Fuerza te acompañe!</h4><br><span style= display:none>TIP: puedes guiarte con la música para hacerlo cada vez mejor</span><button id="mostrarInstrucciones">INSTRUCCIONES</button>')
        $('#mostrarInstrucciones').on('click', function() {
            $('#instrucciones').show();
            $('span').show();
            $('#mostrarInstrucciones').hide();
    //CREACIÓN DE BOTÓN QUITAR CONTROLES Y EVENTO HIDE() CON JQUERY
            $('#instrucciones').prepend('<button id="ocultarInstrucciones">OCULTAR INSTRUCCIONES</button><br>')
    //EVENTO HIDE() CON JQUERY
        $('#ocultarInstrucciones').click (() => {
            $('#instrucciones, #ocultarInstrucciones').slideUp(3000);
            $('span').slideUp(3000);
            $('#mostrarInstrucciones').show(3000);
            })
        })
}
instrucciones();

// Arays de la targjetas del juego

const tarjetas = [
    {name: "Luke", img: "../img/luke.jpg"},
    {name: "Luke", img: "../img/luke.jpg"},
    {name: "Chewie", img: "../img/chewie.jpg"},
    {name: "Chewie", img: "../img/chewie.jpg"},
    {name: "Grogu", img: "../img/grogu.jpg"},
    {name: "Grogu", img: "../img/grogu.jpg"},
    {name: "Jabba", img: "../img/jabba.jpg"},
    {name: "Jabba", img: "../img/jabba.jpg"},
    {name: "Maul", img: "../img/maul.jpg"},
    {name: "Maul", img: "../img/maul.jpg"},
    {name: "obiWan", img: "../img/obiWan.jpg"},
    {name: "obiWan", img: "../img/obiWan.jpg"},
    {name: "R2B2", img: "../img/r2b2.jpg"},
    {name: "R2B2", img: "../img/r2b2.jpg"},
    {name: "Trooper", img: "../img/tropper.jpg"},
    {name: "Trooper", img: "../img/trooper.jpg"},
    {name: "darthVader", img: "../img/vader.jpg"},
    {name: "darthVader", img: "../img/vader.jpg"},
    {name: "C3PO", img: "../img/c3po.jpg"},
    {name: "C3PO", img: "../img/c3po.jpg"},


]

console.log('Los personajes del juego son: ');
for (let index = 0; index < array.length; index++) {
    console.log(tarjetas[index].name);
    
}