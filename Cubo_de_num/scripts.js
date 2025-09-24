function cubo(numero) {
  let resultado = numero;

  if (isNaN(numero)) {
    alert("Lo que me esta usted pasando no es un número");
    return false;
  } else {
    for (let i = 0; i < numero; i++) {
      resultado *= numero;
    }
  }
  return resultado;
}

console.log(cubo(3));
console.log(cubo("Sur"));
