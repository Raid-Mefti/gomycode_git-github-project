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



