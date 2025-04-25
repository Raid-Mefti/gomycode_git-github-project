var age = 18


var user = (age > 18) ? 'majeur' : 'mineur'
//console.log(user);
// est équivalent à : 
/* var user 
if(age>18){
    user = majeur
}
else{
    user = mineur
}
    console.log(user)

*/

//console.log(`L'âge de l'utilisateur est ${age} ans.`);
//est équivalent à : 
// console.log("l'âge de l'utilisateur est "+age+" ans.")


//on peut aussi faire :
/*
let a = 0

let result = (a == 0) ? 'zero' : a>0 ? "positive" : "negative"; 


document.getElementById('button').addEventListener("click", ()=>{
    alert("hello")
})
//is equivalent to :
function hello(){
    alert("hello")
}
document.getElementById("button").addEventListener("click",hello)*/


document.getElementById("button").addEventListener("click", () => {
    var score = 0

    document.getElementById("answer").value = ""
    var rep1 = document.getElementById("1")
    var rep2 = document.getElementById("2")
    var rep3 = document.getElementById("3")
    var rep4 = document.getElementById("4")
    var rep5 = document.getElementById("5")
    var rep6 = document.getElementById("6")
    var rep7 = document.getElementById("7")


    if(rep1.checked){
        score += 10
        document.getElementById("answer").value += "1) vraie, "
    }
    else{
        document.getElementById("answer").value += "1) fausse, "
    }


    if(rep2.checked){
        score += 10
        document.getElementById("answer").value += "2) vraie, "
    }
    else{
        document.getElementById("answer").value += "2) fausse, "
    }


    if(rep3.checked){
        score += 10
        document.getElementById("answer").value += "3) vraie, "
    }
    else{
        document.getElementById("answer").value += "3) fausse, "
    }


        
    if(rep4.checked){
        score += 10
        document.getElementById("answer").value += "4) vraie, "
    }
    else{
        document.getElementById("answer").value += "4) fausse, "
    }


        
    if(rep5.checked){
        score += 10
        document.getElementById("answer").value += "5) vraie, "
    }
    else{
        document.getElementById("answer").value += "5) fausse, "
    }

    document.getElementById("answer").value += "Your score is : " + score
    


    console.log(score);

})