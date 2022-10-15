// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var sumar=0;
    for (var i = 1; i < 11; i++){
      sumar= sumar + i;

    }
    return sumar;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var parArray = [];
  for(let i = 0; i <= array.length; i++){
    var restoArray = array[i] % 2;
    if(restoArray === 0){
       parArray.push(array[i]);
    }
  }
  return parArray;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var elevarNum = [];
  for(let i = 0; i <= array.length - 1; i++){
    elevarNum.push(Math.pow(array[i], 2))
  }
  return elevarNum;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var sumandoAndo = 0;
  for(let i = 0; i <= array.length - 1; i++){
    var sumandoAndo = sumandoAndo + array[i];
  }
  return sumandoAndo;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let digitosNum = num.toString();
  return (digitosNum.length);
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
