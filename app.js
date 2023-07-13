function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jugarAlAdivino() {
  let intentos = 3;
  let numeroAleatorio = obtenerNumeroAleatorio(1, 10);

  alert("¡Bienvenido al juego de adivinanzas! Tienes 3 intentos para adivinar un numero del 1 al 10.");

  while (intentos > 0) {
    let respuesta = parseInt(prompt("Ingresa tu número:"));

    if (respuesta === numeroAleatorio) {
      alert("¡Felicitaciones! Adivinaste el numero.");
      return;
    } else if (respuesta < numeroAleatorio) {
      alert("El numero que ingresaste es demasiado bajo.");
    } else {
      alert("El numero que ingresaste es demasiado alto.");
    }

    intentos--;
  }

  alert("¡Lo siento! No tienes mas intentos. El numero correcto era: " + numeroAleatorio);
}

// ejecutando funcion principal
jugarAlAdivino();



