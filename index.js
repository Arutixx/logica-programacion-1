const prompt = require('prompt-sync')();
//No cambiar el nombre de la función ordenarNumeros
function ordenarNumeros() {
  var num1 = parseFloat(prompt("Ingrese el primer numero:"));
  var num2 = parseFloat(prompt("Ingrese el segundo numero:"));
  var num3 = parseFloat(prompt("Ingrese el tercer numero:"));

  var NumerosOrdenados = [num1, num2, num3].sort(function(a, b) {
    return a - b;
  });
  
  let mayor = NumerosOrdenados[2];
  let centro = NumerosOrdenados[1];
  let menor = NumerosOrdenados[0];

  console.log("Número menor: " + menor);
  console.log("Número en el centro: " + centro);
  console.log("Número mayor: " + mayor);

  
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;