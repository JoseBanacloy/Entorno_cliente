let buscadorNum = parseInt(Math.random()*50 + 1);
console.log(buscadorNum);

var numHaAdivinar = prompt("Dime un numero del 1 al 50 para adiviniarlo");
<<<<<<< HEAD
console.log(numHaAdivinar);

=======

console.log(numHaAdivinar);
>>>>>>> 456d0deb7961071df044126f7a2447860cd9a57b
if (parseInt(buscadorNum) < parseInt(numHaAdivinar)){
    console.log("Te pasaste jefe!");
}else if(parseInt(buscadorNum) > parseInt(numHaAdivinar)){
    console.log("Te quedaste corto!");
}
else{
    console.log("Has dado en el clavo master!");
    alert("Has dado en el clavo master");
}