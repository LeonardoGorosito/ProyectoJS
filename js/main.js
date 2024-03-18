function esPar(numero) {
  if (numero % 2 === 0) {
    alert("El número " + numero + " es par");
  } else {
    alert("El número " + numero + " es impar");
  }
}

function main() {
  let seguir = true;
  while (seguir) {
    let numero = parseInt(prompt("Ingrese un número:"));
    esPar(numero);

    let respuesta = prompt("¿Desea continuar? (Sí/No)");
    if (respuesta.toLowerCase() === "no") {
      seguir = false;
    }
  }
}

main();




