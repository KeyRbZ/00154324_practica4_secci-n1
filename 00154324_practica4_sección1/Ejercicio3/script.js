// --- Problema 1: Ordenar un array de números ---
const numeros = [21, 5, 100, 30, 8];

// Orden ascendente y mostrar en HTML
const numerosAscendente = [...numeros].sort((a, b) => a - b);
document.getElementById("ordenAscendente").textContent = `Array en orden ascendente: ${numerosAscendente.join(', ')}`;

// Orden descendente y mostrar en HTML
const numerosDescendente = [...numeros].sort((a, b) => b - a);
document.getElementById("ordenDescendente").textContent = `Array en orden descendente: ${numerosDescendente.join(', ')}`;


// --- Problema 2: Verificar si un número es par o impar ---
function esParOImpar(numero, idElemento) {
  const resultado = (numero % 2 === 0) ? `${numero} es un número par.` : `${numero} es un número impar.`;
  document.getElementById(idElemento).textContent = resultado;
}

// Ejemplos de uso y mostrar en HTML
esParOImpar(10, "parImpar1");
esParOImpar(7, "parImpar2");


// --- Problema 3: Calcular la altura de una planta ---
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let alturaActual = 0;
  let dias = 0;
  while (alturaActual < desiredHeight) {
    dias++;
    alturaActual += upSpeed;
    if (alturaActual < desiredHeight) {
      alturaActual -= downSpeed;
    }
  }
  return dias;
}

// Ejemplo de uso y mostrar en HTML
const diasNecesarios = growingPlant(10, 9, 4); 
document.getElementById("alturaPlanta").textContent = `La planta tardará ${diasNecesarios} día(s) en alcanzar la altura deseada.`;