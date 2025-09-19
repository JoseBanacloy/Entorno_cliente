let buscadorNum = parseInt(Math.random()*50 + 1);
console.log(buscadorNum);

var numHaAdivinar = prompt("Dime un numero del 1 al 50 para adiviniarlo");

console.log(numHaAdivinar);
if (parseInt(buscadorNum) < parseInt(numHaAdivinar)){
    console.log("Te pasaste jefe!");
}else if(parseInt(buscadorNum) > parseInt(numHaAdivinar)){
    console.log("Te quedaste corto!");
}
else{
    console.log("Has dado en el clavo master!");
    alert("Has dado en el clavo master");
}