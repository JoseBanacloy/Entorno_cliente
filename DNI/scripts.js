var letrasDNi = "TRWAGMYFPDXBNJZSQVHLCKE";

function calcularLetraDNI(numeroDNI){
    let resto = numeroDNI % 23;
    if (resto > 23 || resto < 0 || isNaN(numeroDNI)) {
        return "El número de DNI no es correcto";
    }else {
        return letrasDNi.charAt(resto);
    }
}

console.log(calcularLetraDNI(53754340));
