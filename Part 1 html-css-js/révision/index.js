/*//un tableau avec des nombres et on retourne un autre tableau avec le factoriel de chacun de ces nombres

function factoriel(n){
    var result = 1
    for(let i = 1 ; i<=n; i++){
        result *= i
    }
    return result
}

function factTab(tab){
    var tabFact = []
    for(let i in tab){
        tabFact[i]=factoriel(tab[i])
        console.log(tabFact[i])
    }
    return tabFact
}
// ou bien :
function factTab2(tab){
    var tabFact = []
    for(let i of tab){
        tabFact.push(factoriel(i))
    }
    return tabFact
}
var tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

console.log(factTab(tab)); */


////////////////
// mode jour/ mode nuit
/*
function changer(){
    var body = document.getElementById("body")
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black"
        body.style.color = "white"
    }else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
}
document.getElementById("btn").addEventListener("click",changer)*/

// reverse a string : write a function that reverses a given string 
function reverseString(mot){
    var motReverse = []
    for(let i of mot){
        motReverse += i
    }
    return motReverse
}
//console.log(reverseString("hello"));

//Count Characters: Create a function that counts the number of characters in a string.
function countChar(mot){
    return mot.length
}

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalWords(mot){
    return mot.toUpperCase()
}

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function minMax(tab){
    var tab2 = [tab[0], tab[0]]
    for(let i of tab){
        if(i > tab2[1])
            tab2[1] = i
        else if(i < tab2[0])
            tab2[0] = i
    }
    return tab2
}
//console.log("le min est "+minMax(tab)[0]+" et le max est "+minMax(tab)[1]);

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(tab){
    var result = 0
    for(let i of tab){
        result += i
    }
    return result
}

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
// the filter condition : prime numbers
var tab = [5, 2, 19, 10, 3, 5, 13, 15]


function prime(tab){
    var tabPrime=[]
    var k = 0
    for(let i in tab){
        if(tab[i]==2 || tab[i]==3){
            tabPrime[k] = tab[i]
            k++
        }
        else{
            for(let j = 2 ; j < (tab[i]+1)/2 ; j++){
                if(tab[i]%j==0)
                    break;
                else if(j==((tab[i]+1)/2)-1){
                    tabPrime[k] = tab[i]
                    k++
                }
            }
        }
    }
    console.log(tab)
    console.log(tabPrime);

}
    prime(tab)

function filter(tab){
    var tabPrime = []
    var copie = tab
    console.log(copie);
    for(let i in copie){
        console.log(Math.floor(copie[i]/2));
        for(let j = 2; j<=(Math.floor(copie[i]/2)); j++){
            if(copie[i]%j==0 ){
                console.log("j :"+j);
                break;
            }
                
            else if(j==copie[i]/2){
                tabPrime.push(copie[i])
                tab.pop(tab[i])
            }
        }
        console.log("i :"+i);
    }
    console.log("tab :"+tab);
    console.log("tab prime :"+tabPrime);
}
//filter(tab)

