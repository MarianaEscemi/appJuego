/* 
************************************
funciones para la pagina index.html
************************************
*/


// no pueda acceder hasta que no se ingrese usuario
document.getElementById('ingresar').style.pointerEvents="none";
document.getElementById('ingresar').style.cursor="default";
document.querySelector('#username').addEventListener("input", habilitarIngreso);

function habilitarIngreso(){
    document.getElementById('ingresar').style.pointerEvents="auto";
    document.getElementById('ingresar').style.cursor="pointer";
    ingreso();
}

function ingreso() {
    document.querySelector("#ingresar").addEventListener("click",logIn); // caundo el usuario haga click en el boton se ejecuta la funcion en este caso login

}

//funcion de inicio de la app
function logIn() {
    let usuario = document.getElementById("username").value;
    let saludo = (`Hola ${usuario}, bienvenido al juego!!`)
    console.log(saludo);

    localStorage.setItem("usuario", usuario); //llave - valor
    console.log(localStorage.getItem("usuario"));
    (localStorage.setItem('saludo',saludo))
}



// lo mismo que evento on click o addeventlistener
//con jquery
function dosJugadores() {
    $('#falsoBtn').click(() =>{
        $("#container1").append('<p id="noDis">Esta característica del Juego aún no está lista</p>')
        $("#noDis").fadeIn(2000)
        $("#noDis").fadeOut(2000)
    })
}
dosJugadores();

//tomar datos con jquery
function animacion() {
    var titulo = $("#title");
    var login = $("#logIn");
    var btn = $("#ingresar");
    var falsoBtn = $("#falsoBtn");

    titulo.fadeIn(2000);
    login.fadeIn(2000).animate({opacity: '1'}  , "slow");
    btn.fadeIn(2000).animate({opacity: '1'}  , "slow");;
    falsoBtn.fadeIn(2000).animate({opacity: '1'}  , "slow");;
}
//llamamos a las funciones

animacion();





//esta funcion podria servir para limpiar un carrito o una compra
function limpiar() {
    localStorage.clear();
}



/* 
************************************
funciones para la pagina jugador uno
************************************
*/


let score = 0;
const startButton = document.querySelector('#start');
const grid = document.querySelector(`#juego`);
const resultado = document.querySelector(`#score`);

