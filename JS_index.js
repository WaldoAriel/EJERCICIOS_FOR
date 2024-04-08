{{ 
 // 1-Escribe una función llamada imprimirNumeros que tome un número como parámetro e imprima todos los números desde 1 hasta ese número utilizando un ciclo for.

function imprimirNumeros(cifra) {
    let resultado = '';
     for (let i = 1 ; i <= cifra; i++) {
         resultado += 'Número '+ i + ' ✓' + '<br>'; 
     }
    document.getElementById('ejercicio1').innerHTML = resultado;
 }


//________________________________________________//

// 2-Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros, y devuelva la cantidad de veces que el carácter aparece en la cadena. Utiliza un ciclo for para recorrer la cadena.

function contarCaracteres(cadena , caracter) {
    let cantidad = 0;
     for (let i = 0 ; i < cadena.length ; i++) {
         if (cadena[i] === caracter) {
            cantidad++;
        }
    }
    document.getElementById('ejercicio2').innerHTML = `La letra "${caracter}" aparece ${cantidad} veces en tu frase.`;
}

//________________________________________________//

// 3-Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva cadena donde cada carácter se duplique. Utiliza un ciclo for para iterar sobre la cadena original.

function duplicarCaracteres(texto) {
    let nuevoTexto = '';
    for (let i = 0; i < texto.length; i++) {
        nuevoTexto = nuevoTexto + texto[i] + texto[i]             
    }
    document.getElementById('ejercicio3').innerHTML = `${nuevoTexto} (No te preocupes, no estás viendo doble.)`;
}

//________________________________________________//

// 4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función debería devolver 321. Utiliza un ciclo for para invertir el número.

function invertirNumero(numero) {
    let numeroInvertido = '';
    for (let i = numero.length-1; i >= 0 ; i--) {
        numeroInvertido = numeroInvertido + numero[i];      
    }
    document.getElementById('ejercicio4').innerHTML = `Hemos invertido tu número: ${parseInt(numeroInvertido)}`;
}

//________________________________________________//


// 5-Escribe una función llamada calcularPotencia que tome dos números como parámetros, la base y el exponente, y devuelva el resultado de elevar la base al exponente. Utiliza un ciclo for para realizar la multiplicación.


function calcularPotencia(numBase , numExpo) {
    var resultado = 1;
    for ( i = 1 ; i <= numExpo ; i++ ) {
        resultado *=numBase;
    }
    document.getElementById('ejercicio5').innerHTML = `El número ${numBase} elevado a la potencia ${numExpo}, dá como resultado: ${resultado}`;
}

//________________________________________________//

// 6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos.

function contarDigitos(numero) {
    let cadenaNumero = numero.toString();
    let contador = 0;
    for (let i = 0; i < cadenaNumero.length; i++) {
    if(!isNaN(parseInt(cadenaNumero[i]))) {
        contador++
    }
    }
    document.getElementById('ejercicio6').innerHTML = `Usted escribió ${contador} dígitos.`;
}

//________________________________________________//

// 7-Implementa una función llamada reemplazarVocales que tome una cadena de texto como parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un guion bajo (_). Utiliza un ciclo for para iterar sobre la cadena original.

function reemplazarVocales(frase){
    let nuevaFrase = '';
    let arrayVocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < frase.length; i++) {
        
        if (arrayVocales.includes(frase[i])) {
            nuevaFrase += '_';
        } else {
            nuevaFrase += frase[i];
        }
    }
    document.getElementById('ejercicio7').innerHTML = `${nuevaFrase} <br> Perdón, perdimos las vocales!🤦‍♂️`;
}

//________________________________________________//

// 8-Desarrolla una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa.

function calcularFactorial(numero) { 
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i ;    
    } 
    document.getElementById('ejercicio8').innerHTML = `El factorial de ${numero} es: ${resultado}`;

}

//________________________________________________//

// 9-Escribe una función llamada imprimirPares que tome un número como parámetro e imprima todos os números pares hasta ese número utilizando un ciclo for.

function imprimirPares(numero) {
    let resultado = '';
    for (let i = 0; i <= numero; i += 2) {
        resultado +=  i + ' Es número par menor o igual a ' + numero + '<br>';
    }
    document.getElementById('ejercicio9').innerHTML = resultado;
}

//________________________________________________//

// 10-Crea una función llamada contarLetrasMayusculas que tome una cadena de texto como parámetro y devuelva la cantidad de letras mayúsculas que contiene. Utiliza el ciclo for para recorrer la cadena y un condicional if para verificar si cada carácter es una letra mayúscula.

function contarLetrasMayusculas(frase){
let mayusculas = '';
for (let i = 0; i < frase.length; i++) {
    if (frase.charCodeAt(i) > 64 && frase.charCodeAt(i) < 91) {
       mayusculas += frase[i] , ', \n';
    }   
}
document.getElementById('ejercicio10').innerHTML = `La frase "${frase}", tiene ${mayusculas.length} letras mayúsculas y son las siguientes: ${mayusculas}.`;
}

}}