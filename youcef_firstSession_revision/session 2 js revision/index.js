function surface(x,y){
    var x = prompt("Veuillez introduire la longueur")
    var y = prompt("Veuillez introduire la largeur")
    var result = x*y
    alert("The surface is : "+result)
}
//surface(5,10)
function switchValue(x,y){
    var x = prompt("Veuillez introduire le premier chiffre")
    var y = prompt("Veuillez introduire le deuxième chiffre")

    var z = x;
    x=y
    y=z
    alert("Le premier chiffre devient : "+x + " , et le deuxième : "+y)
}
//switchValue(5,10)

function productPrice(quantity,price){
    alert("Prix total : "+quantity*price)
}
//productPrice(10,5)

