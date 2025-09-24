function calculoFactorial(num){
    if (num < 0){
        return "El factorial no puede ser negativo";
    }
    else if(num === 0 ){
        return 1;
    }
    else {
        return (num * calculoFactorial(num - 1))
    }
}


console.log(calculoFactorial(5));


function factorialFor(num){
    if (num < 0){
        return "El factorial no puede ser negativo";
    }
    else if(num === 0 ){
        return 1;
    }
    else {
        let resultado = 1;
        for(let i = num; i > 0; i--){
            resultado *= i; 
        }
        return resultado
    }
}

console.log(factorialFor(5));