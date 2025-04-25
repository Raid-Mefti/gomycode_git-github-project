/*function changeColor(){
    var container = document.getElementById("bigDiv")

    if(container.style.backgroundColor=="red")
        container.style.backgroundColor = "blue"
    else
        container.style.backgroundColor = "red"

}

document.getElementById("button").addEventListener("click", changeColor)*/


/*
function search_number(tab){
    for(let i of tab){
        if(typeof Number(i) == 'number')
            return true
    }
    return false
}
*/
/*
function search_number(tab){
    tab2 = [0,1,2,3,4,5,6,7,8,9]
    for(let i of tab){
        for(let j of tab2){
            if(i == j)
                return true
        }
    }return false
}
function search_Uppercase(tab){
    return tab!=tab.toLowerCase()
}
function traiter(){
    console.log(document.getElementById("first_name").value);
    console.log(document.getElementById("last_name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("Gender").value);

    var password = document.getElementById("password")
    if(search_Uppercase(password.value)==true && search_number(password.value)==true)
        console.log(document.getElementById("password").value);
    else if(search_Uppercase(password.value)==false && search_number(password.value)==true)
        console.log("Votre mot de passe doit contenir une majuscule.");
    else if(search_Uppercase(password.value)==true && search_number(password.value)==false)
        console.log("Votre mot de passe doit contenir un nombre.");
    else
        console.log("Votre mot de passe doit contenir une majuscule et un nombre.");
}

document.getElementById("submit").addEventListener("click", traiter)
*/
















///////////////////////




/*
let i = 0
var temporary = 0
result = 0
var tab = []

document.getElementById("zero").addEventListener("click", () =>{
    document.getElementById("equation").value += "0";
    document.getElementById("equation_history").value += "0";
});

document.getElementById("one").addEventListener("click", () =>{
    document.getElementById("equation").value += "1";
    document.getElementById("equation_history").value += "1";
});
document.getElementById("two").addEventListener("click", () =>{
    document.getElementById("equation").value += "2";
    document.getElementById("equation_history").value += "2";
});
document.getElementById("three").addEventListener("click", () =>{
    document.getElementById("equation").value += "3";
    document.getElementById("equation_history").value += "3";
});
document.getElementById("four").addEventListener("click", () =>{
    document.getElementById("equation").value += "4";
    document.getElementById("equation_history").value += "4";
});
document.getElementById("five").addEventListener("click", () =>{
    document.getElementById("equation").value += "5";
    document.getElementById("equation_history").value += "5";
});
document.getElementById("six").addEventListener("click", () =>{
    document.getElementById("equation").value += "6";
    document.getElementById("equation_history").value += "6";
});
document.getElementById("seven").addEventListener("click", () =>{
    document.getElementById("equation").value += "7";
    document.getElementById("equation_history").value += "7";
});
document.getElementById("eight").addEventListener("click", () =>{
    document.getElementById("equation").value += "8";
    document.getElementById("equation_history").value += "8";
});
document.getElementById("nine").addEventListener("click", () =>{
    document.getElementById("equation").value += "9";
    document.getElementById("equation_history").value += "9";
});
document.getElementById("dot").addEventListener("click", () =>{
    document.getElementById("equation").value += ".";
    document.getElementById("equation_history").value += ".";
});



document.getElementById("plus").addEventListener("click", () =>{
    if(document.getElementById("equation").value=="" && tab.length==0 )
        console.log("Veuillez introduire d'abord une valeur.");
    else{
        tab[i]=document.getElementById("equation").value
        result += Number(tab[i])
        console.log(result);
        document.getElementById("equation_history").value += "+";
        i++
        document.getElementById("equation").value = ""
    }


    //
    temporary = document.getElementById("equation").value
    if(tab.length==0 && document.getElementById("equation").value!=""){
        tab[i]=document.getElementById("equation").value
        i++
    }
    else{
        console.log("Introduisez d'abord une valeur");
    }

    if(tab.length!=0){
        for(let j of tab){
            console.log("j is : " +j);
            console.log("what is going on ?");

    
            if(j=="+" || j=="-" || j=="/" || j=="*"){
                console.log("Veuillez introduire une valeur");
            }
            else{
                tab[i]=document.getElementById("equation").value
                i++
                document.getElementById("equation").value += "+";
                console.log(i);
                console.log(tab);
            }
        }
    }
        //
});

document.getElementById("minus").addEventListener("click", () =>{
    if(document.getElementById("equation").value=="" && tab.length==0 )
        console.log("Veuillez introduire d'abord un valeur.");
    else{
        tab[i]=document.getElementById("equation").value
        document.getElementById("equation_history").value += "-";
        i++
        document.getElementById("equation").value = ""
    }
    result -= Number(tab[i-1])

});


document.getElementById("divide").addEventListener("click", () =>{
    if(document.getElementById("equation").value=="" && tab.length==0 )
        console.log("Veuillez introduire d'abord un valeur.");
    else{
        tab[i]=document.getElementById("equation").value
        document.getElementById("equation_history").value += "/";
        i++
        document.getElementById("equation").value = ""
    }
    result = result/Number(tab[i-1])

});


document.getElementById("multiply").addEventListener("click", () =>{
    if(document.getElementById("equation").value=="" && tab.length==0 )
        console.log("Veuillez introduire d'abord un valeur.");
    else{
        tab[i]=document.getElementById("equation").value
        document.getElementById("equation_history").value += "*";
        i++
        document.getElementById("equation").value = ""
    }
    result = result*Number(tab[i-1])

});

document.getElementById("equal").addEventListener("click", () =>{
    console.log(document.getElementById("equation").value);
    document.getElementById("equation").value += result
    console.log(result);
});
*/




function ultimate_calcul(){
    var display = document.getElementById("equation").value
    var result = eval(display)
    document.getElementById("equation").value = result
}


function ecrire(val){
    document.getElementById("equation").value += val    
}

document.getElementById("zero").addEventListener("click", function(){
    ecrire("0");
});
document.getElementById("one").addEventListener("click", function(){
    ecrire("1");
});
document.getElementById("two").addEventListener("click", function(){
    ecrire("2");
});
document.getElementById("three").addEventListener("click", function(){
    ecrire("3");
});
document.getElementById("four").addEventListener("click", function(){
    ecrire("4");
});
document.getElementById("five").addEventListener("click", function(){
    ecrire("5");
});
document.getElementById("six").addEventListener("click", function(){
    ecrire("6");
});
document.getElementById("seven").addEventListener("click", function(){
    ecrire("7");
});
document.getElementById("eight").addEventListener("click", function(){
    ecrire("8");
});
document.getElementById("nine").addEventListener("click", function(){
    ecrire("9");
});
document.getElementById("dot").addEventListener("click", function(){
    ecrire(".");
});

document.getElementById("plus").addEventListener("click", function(){
    ecrire("+");
});
document.getElementById("minus").addEventListener("click", function(){
    ecrire("-");
});
document.getElementById("divide").addEventListener("click", function(){
    ecrire("/");
});
document.getElementById("multiply").addEventListener("click", function(){
    ecrire("*");
});



function calcule(){
    var display = document.getElementById("equation").value
    if(display.includes("+")){
        var tab= display.split("+")
        var resultat=0
        if(tab.length!=0){
            for(let i of tab){
                resultat += Number(i)
                console.log(typeof(resultat))
            }
        }
        document.getElementById("equation").value=resultat
    }

    else if(display.includes("-")){
        var resultat=0
        var tab = display.split("-")
        if(tab.length!=0){
            resultat=tab[0]
            for(let i=1 ; i<tab.length; i++){
                resultat -= Number(tab[i])
            }
        }
        document.getElementById("equation").value=resultat
    }

    else if(display.includes("*")){

    }


}


function multiply(tab){
    console.log(tab);
    var resultat=1
    var temporary = tab.split("*")
    if(temporary.length!=0){
        console.log(temporary);
        for(let i of temporary){
            resultat = resultat * Number(i)
            console.log(typeof(resultat))
        }
    }

    document.getElementById("equation").value=resultat
}

function divide(tab){
    console.log(tab);
    var resultat=1
    var temporary = tab.split("%")
    if(temporary.length!=0){
        console.log(temporary);
        for(let i of temporary){
            resultat = resultat % Number(i)
            console.log(typeof(resultat))
        }
    }

    document.getElementById("equation").value=resultat
}

document.getElementById("equal").addEventListener("click", function(){
    ultimate_calcul ()
});