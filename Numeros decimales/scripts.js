var notas = [5.5,6, 7.3, 8.59, 9,11]


function notaMedia(arrayNotas) {
 let suma = 0;
 let totalNotas = 0;
 for (nota of arrayNotas) {
 suma += nota;
 totalNotas++;
 }
 return parseFloat(suma / totalNotas).toFixed(1); // Devuelve la nota con el n de decimales que le pongas entre paréntesis
}

console.log(notaMedia(notas));
