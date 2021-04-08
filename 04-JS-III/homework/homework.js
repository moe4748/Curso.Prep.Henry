// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var data = array.length;
  return array[data-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var data = array.length;
  return data;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (i = 0; i<(array.length); i++){
    array.splice(i, 1, array[i] + 1);
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  data = array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  data = array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabrasNew = '';
  for (i = 0; i < (palabras.length); ++i) {
    palabrasNew = palabrasNew + palabras[i] + ' ';
  }
  palabrasNew = palabrasNew.substring(0, palabrasNew.length - 1);
  return palabrasNew;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0;i < (array.length);i++){
    if (array[i]== elemento){
      data = true;
      break;
    } else {
      data = false;
    }
  }
  return data;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  data = 0;
  for (i=0;i < (numeros.length);i++){ 
    data = data + numeros[i];
  }
  return data;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  data = 0;
  for (i=0;i < (resultadosTest.length);i++){ 
    data = data + resultadosTest[i];
  }
  dataNew = data / resultadosTest.length;
  return dataNew;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeros.sort(function(a, b){return b - a});
  return numeros[0];
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var data = 1;
  if ((arguments.length) === 0) {
    data = 0;
  } else if ((arguments.length) === 1) {
    data = arguments[0];
  } else {
    for (i = 0; i < (arguments.length); i++) {
      data *= arguments[i];
    }
  }
  return data;
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var j = 0
  for (i = 0; i < (arreglo.length); i++) {
    if (arreglo[i] > 18) {
      j = j + 1;
    }
  }
  return j;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  var data = 0;
  if ((numeroDeDia <= 1) || (numeroDeDia >= 7)) {
    data = 'Es fin de semana';
  } else if ((numeroDeDia > 1) && (numeroDeDia < 7)) {
    data = 'Es dia Laboral';
  }
  return data;
}



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n1 = n.toString();
  for (i = 0; i <= (n1.length); i++) {
    if (n1.charAt(i) == 9) {
      data = true;
      break;
    } else {
      data = false;
    }
  }
  return data;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var igual = arreglo[0];
  var data = 0;
  for (i=1; i<(arreglo.length);i++){
    if (igual == (arreglo[i])){
      data = true;
    } else {
      data = false;
    }
  }
  return data;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesNew = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      mesesNew.push(array[i])
    }
  }
  if (mesesNew.length !== 3) {
    mesesNew = 'No se encontraron los meses pedidos';
  }
  return mesesNew;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
    var j = [];
  for (i = 0; i < (array.length); i++) {
    if (array[i] > 100) {
      j.push(array[i]);
    }
  }
  return j;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  bucle = [];
  for (i = 0; i < 10; i++) {
    numero = numero + 2;
    if (numero === i) {
      bucle = 'Se interrumpió la ejecución';
      break;
    }
    bucle.push(numero);
  }
  return bucle;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  bucle = [];
  for (i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero = numero + 2;
    bucle.push(numero);
  }
  return bucle;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
