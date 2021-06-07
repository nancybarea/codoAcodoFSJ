//funciones generales
function esNumero(valor){
    var valoresAceptados = /^[0-9]+$/;
    if (valor.match(valoresAceptados)){
       return true;
    } else {
      return false;      }
}

//FUNCION 1 
//Ejercicio 1 - Evaluar si un usuario es mayor de edad, 
//el resultado deberá mostrarse mediante una ventana (utilizar Alert)

function mayorOMenos() {

function mayorDeEdad (edad){

    while ( esNumero(edad) == false) {
        edad = prompt("La edad ingresada es incorrecta. Ingrese su edad : ");
    }

    if (parseInt(edad) > 17) {
        alert ('Usted es mayor de edad');
    } else {
        alert('Usted es menor de edad');
    }
}

var edad_usuario = prompt('Ingrese su edad');
mayorDeEdad (edad_usuario)

};



//FUNCION 2
//Dada 3 edades, devuelve la mas grande

function mayorEdad() {

var edad_usuario_1 = parseInt(prompt("Ingrese la edad 1 : "));
var edad_usuario_2 = parseInt(prompt("Ingrese la edad 2 : "));
var edad_usuario_3 = parseInt(prompt("Ingrese la edad 3 : "));

alert ( "La mayor edad es : " + Math.max(edad_usuario_1,edad_usuario_2,edad_usuario_3));

};

//FUNCION 3
//Ejercicio ingresar 3 usuarios: nombre y edad. Devuelve el mayor de todos.

function nombreUsuarioMayorEdad () {

var vNombre="";
var vEdad=0;
var vNombreDelMayor = "";
var vEdadDelMayor = 0;
var vNroUsuario = 1;

for (let i=0 ; i < 3; i++) {

var vNombre = prompt("Ingrese el nombre del usuario " + vNroUsuario + " : ");
var vEdad = parseInt(prompt("Ingrese la edad: "));

if (vEdad > vEdadDelMayor) {
    vEdadDelMayor = vEdad;
    vNombreDelMayor = vNombre;
}

vNroUsuario++;
}

alert ( 'El usuario '+ vNombreDelMayor + ' tiene la mayor edad, que es : ' + vEdadDelMayor );
};

//FUNCION 4
//Ejercicio 2- Evaluar el ingreso de 3 usuarios e indique cuál de ellos es el mayor: indica el usuario con mayor edad

function nroUsuarioMayorEdad () {

    var vEdad=0;
    var vNroUsuario = 1;
    var vNroUsuarioMayor = 1;
    var vEdadDelMayor = 0;
    
    for (let i=0 ; i < 3; i++) {
    
    var vEdad = prompt("Ingrese la edad del usuario " + vNroUsuario + ": ");
    
    while ( esNumero(vEdad) == false) {
        vEdad = prompt("La edad ingresada es incorrecta. Ingrese la edad del usuario " + vNroUsuario + ": ");
    }

    if (vEdad > vEdadDelMayor) {
        vEdadDelMayor = vEdad;
        vNroUsuarioMayor = vNroUsuario;
    }
    
    vNroUsuario++;
    }
    
    alert ( 'El usuario '+ vNroUsuarioMayor + ' tiene la mayor edad, que es : ' + vEdadDelMayor );
    };


