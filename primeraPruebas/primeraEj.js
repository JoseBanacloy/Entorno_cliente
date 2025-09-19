var numHaAdivinar = prompt("Dime un numero del 1 al 50 para adiviniarlo");
let buscadorNum = parseInt(Math.random()*50 + 1);


console.log(numHaAdivinar);
console.log(buscadorNum);
if (parseInt(buscadorNum) < parseInt(numHaAdivinar)){
    console.log("Te pasaste jefe!");
}else if(parseInt(buscadorNum) > parseInt(numHaAdivinar)){
    console.log("Te quedaste corto!");
}
else{
    console.log("Has dado en el clavo master!");
    alert("Has dado en el clavo master");
}