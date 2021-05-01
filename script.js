// alert('¡Soy JavaScript!');

// Comentarios

// Comentario de línea
/* Comentario de mas
de una línea
*/

// Sentencias

// alert('Hola'); alert('mundo');

// alert('Hola'); 
// alert('mundo');

// Inserción automática de punto y coma

// alert('Hola') 
// alert('mundo')

// Variables

let mensaje;
mensaje = 'Hola mundo';
// console.log(mensaje);

let c=5, d=2, j=3;

let a = 5;
let b = 6;
let suma = a + b;
// console.log('El resultado de la suma es: ' + suma);

b = 7;
// console.log(b);

let nombre = 'Cristian';
let nombre2 = nombre;
nombre = 'Tejada';
// console.log("El nombre uno es: " + nombre);
// console.log("El nombre dos es: "+ nombre2);

// Nombrar variables con camel case
nombreUno = "Cristian";
nombreDos = "Cristian 2";

// Nombrar variables underscore
nombre_uno = "Cristian";
nombre_dos = "Tejada";

// Nombres no comunes
let $ = 1;
let _ = 2;

// No puede nombrar variables
/*let 1a = 3;
let primer-nombre = "Cris";*/

"use strict"
mensaje = "Hola Mundo";

// Constantes

const PI = 3.141624;
const COLOR_ROJO = "#0000FF";
pi_dos = PI;
pi_dos = 7;
// console.log(PI);
// console.log(pi_dos);

// const id_account = get_id_account(45);

// Tipos de datos

// Dinámicamente tipado

let mensaje_tipo = "Hola";
mensaje_tipo = 123;

// Tipo de dato Number
let n = 123;
n = 14.524;

// Valores númericos especiales Infinity, -Infinity y NaN

// Infínity: Representa el infinito matemático, es un valor especial que es mayor que cualquier número.

// console.log(1 / 0);
// console.log(Infinity)

// Nan: Representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida.

// console.log("No es un número" / 2);
// console.log(NaN);

// NaN es pegajoso, cualquier operación sobre NaN devuelve NaN.

// console.log("No es un número" / 2 + 5);

// Tipo de dato BigInt


// Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

let numero_grande = 92354813215481321315264813618518152135181n;
// console.log(numero_grande);

// Tipo de dato String

let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //Backticks funcionalidad extendida
let nomb = 'Cristian';
// console.log("Hola " + nomb);
// console.log('Hola', nomb);
// console.log(`Hola`, nomb);
// console.log("Hola ${nomb}");
// console.log('Hola ${nomb}');
// console.log(`Hola ${nomb}`);

// Tipo de dato Booleano

// true y flase

let verdadero = true;
let falso = false;

let mayor = 4 > 1; // true

// Valor null

// Valor especial que no pertenece a ningún tipo de dato anterior.
// Forma un tipo propio separado que contiene solo el valor null.

let edad = null;
// console.log(edad);

// En JS null NO significa un objeto no existente, es solo un valor especial que representa nada, vacío.

// Valor undefined

// Valor especial que no pertenece a ningún tipo de dato anterior.
// Su significado es valor no asignado.

let edad_dos;
// console.log(edad_dos);

// El operador typeof o función typeof(x), devuelve el tipo de dato.

// console.log(typeof undefined); //undefined
// console.log(typeof 1); //number
// console.log(typeof true); //boolean
// console.log(typeof 10n); //bigint
// console.log(typeof "Hola"); //string

// console.log(typeof(alert)); //function
// console.log(typeof(null)); //null - //Reconocido como error de typeof al devolver como resultado object
// console.log(typeof(Math)); //object

// Interacciones: alert, prompt, confirm

// alert
// alert('Hola mundo');

// prompt
// let nombre_prompt = prompt('Digite el nombre');
// console.log(nombre_prompt);

// prompt('Digite el nombre', ''); //solo para IE para que no devuelva valor de undefined

// Confirm

// let resp_confirm = confirm('¿Es humano?');
// console.log(resp_confirm); //Aceptar = true, Cancelar = false

// Conversión de tipos

// Existen dos tipos de conversiones explicita e implícita

// Conversión a String

let valor = true;
// console.log(typeof(valor));
valor = String(valor);
// console.log(valor);
// console.log(typeof(valor));

//Convertir a numero

// Conversiones numéricas ocurren automáticamente en funciones matematicas y expresiones

//console.log('4' / '2'); // 2

let cadena = "123";
// console.log(cadena);
let num_cad = Number(cadena);
// console.log(num_cad);
let num_cad_dos = Number("123e"); // NaN
// console.log(num_cad_dos);// NaN

/*
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

// Convertir a Boleano

//console.log(Boolean("hola"));

/*
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
string 'hola' -> true
'0' -> true
*/


