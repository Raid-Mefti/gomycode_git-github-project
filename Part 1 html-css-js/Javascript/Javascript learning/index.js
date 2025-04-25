/*alert("hi")
confirm("are you sure ?")
prompt("why are you")*/

/*
var personne = {
    nom:"ali",
    age:30
}
alert(typeof(personne))*/

/*
var personne ={
    nom: "raid",
    age: 28,
    genre: "homme"
}
console.log("La personne s'appelle "+personne.nom+" et son âge est "+personne.age)
console.log(personne.nom+" "+personne.age)
*/

/*
var personne2 ={
    fullname:{
        nom:"mefti",
        prénom:"raid"
    },
    age: 28,
    genre: "homme"
}
console.log(personne2.fullname)
console.log(personne2.fullname.nom+" "+personne2.fullname.prénom+", "+personne2.age)
*/




/*
var age = prompt("Veuillez donner votre âge")

if(age>=18){
    console.log("majeur")
}
else{
    console.log("mineur")
}
*/

/*
var argent = prompt("Veuillez introduire votre montant en million de centimes : ")
if(argent >= 100){
    console.log("Vous êtes riche.")
}
else if(argent < 100 && argent >= 5){
    console.log("Vous êtes à l'aise.")
}
else{
    console.log("Espèce de pauvre. Lol.")
}
*/

function max2(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}
/*
function max3(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else{
        return c
    }
}
*/
/*
function max2(a,b,c){
    var max1 = max2(a,b)
    return max2=(max1,c)
}*/
function max3(a,b,c){
    return max2(max2(a,b),c)
}

function max4(a,b,c,d){
    return max2(max3(a,b,c), d)
}


/*
var numero1 = Number(prompt("donnez le premier numéro :"))
var numero2 = Number(prompt("donnez le deuxième numéro :"))

if(numero1 > numero2){
    alert("lemax est le premier numéro")
}
else{
    alert("le max est le deuxième numéro")
}
*/

var a,b,c,n
// écrire une fonction qui calcule le carré d'un nombre saisi par l'utilisateur
/*function square(a){
    a=prompt("Veuillez introduire la valeur que vous souhaitez mettre au carré :")
    console.log(a*a)
}

square(a)*/

// écrire une fonction qui affiche si un nombre est pair
/*function pair(a){
    a=prompt("Veuillez introduire la valeur que vous souhaitez vérifier si elle est paire ou non :")
    if(a%2==0)
    {
        console.log(a+" est pair")
    }
    console.log(a+" est impair")
}
pair(a)*/

// écrire une fonction qui concate 3 mots
/*function concat3(a,b,c){
    a=prompt("Votre première valeur à concatener :")
    b=prompt("Votre deuxième valeur à concatener :")
    c=prompt("Votre troisième valeur à concatener :")

    console.log(a+b+c)

}
concat3(a,b,c)*/

// écrire une fonction qui vérifie si le nombre est divisible par 3
/*function div3(a){
    a=prompt("Veuillez introduire la valeur que vous souhaitez vérifier si elle est divisible par 3 ou non :")
    if(a%3==0)
    {
        return console.log(a+" peut être divisé par 3")
    }
    console.log(a+" ne peut pas être divisé par 3")
}
div3(a)*/

// écrire une fonction qui vérifie si le nombre est divisible par un nombre donné n
/*
function divn(a,n){
    a=prompt("Veuillez introduire la valeur que vous souhaitez vérifier si elle est divisible par un chiffre N ou non :")
    n=prompt("Veuillez introduire le chiffre N qui va diviser le premier chiffre :")
    if(a%n==0)
    {
        return console.log(a+" peut être divisé par "+n)
    }
    console.log(a+" ne peut pas être divisé par "+n)
}
divn(a,n)
*/


/*
var variable = Number(prompt("Entrez votre valeur : "))
switch (variable) {
    case 1:
        console.log("Votre valeur est 1")
        break;
    case 2:
        console.log("Votre valeur est 2")
        break;
    case 3:
        console.log("Votre valeur est 3")
        break;

    default:
        console.log("Votre valeur n'est ni 1, ni 2 ni 3")
        break;
}
*/

/*
// Faire un cas où l'utilisateur est demandé quel est son poids, puis son genre, et décider si il/elle est normal ou obèse
var poids = Number(prompt("Veuillez introduire votre poids : "))
var genre = prompt("Veuillez introduire votre genre, et veuillez choisir entre homme ou femme")

switch (genre) {
    case homme:
        if(poids < 90){
            console.log("Vous êtes normal.")
            break;
        }
        console.log("Vous êtes obèse.")
        break;
    case femme:
        if(poids < 40){
            console.log("Vous êtes normale.")
            break;
        }
        console.log("Vous êtes obèse.")
        break;

    default:
        console.log("Vous n'êtes ni un homme ni une femme. Obèse.")
}

if(genre=="homme"){
    if(poids < 90){
        console.log("Vous êtes normal.")
    }else{
        console.log("Vous êtes obèse.")
    }
}else{
    if(poids < 40){
        console.log("Vous êtes normale.")
    }else{
        console.log("Vous êtes obèse.")
    }
}*/


/*
// calculatrice :

var yourChoice = Number(prompt("Pour aditionner, tapez 1. Pour soustraire, tapez 2. Pour multiplier, tapez 3. Pour quittez, tapez 4."))
yourNumber1 = Number(prompt("Votre première valeur :"))
yourNumber2 = Number(prompt("Votre deuxième valeur :"))

while(yourChoice != 4){
    if(yourChoice == 1){
        console.log(yourNumber1+yourNumber2)
    }
    
    if(yourChoice == 2){
        console.log(yourNumber1-yourNumber2)
    }
    
    if(yourChoice == 3){    
        console.log(yourNumber1*yourNumber2)
    }
}
*/



/*
// écrire une fonction qui additionne deux nombres (add):
function add(a,b){
    a=Number(prompt("Votre première valeur :"))
    b=Number(prompt("Votre deuxième valeur :"))
    
    console.log(a+b)
}

// écrire une fonction qui soustrait deux nombres (moins):
function minus(a,b){
    a=Number(prompt("Votre première valeur :"))
    b=Number(prompt("Votre deuxième valeur :"))

    console.log(a-b)
}

// écrire une fonction qui affiche un mot dans la console :
function mot(a){
    console.log(a)
}

// écrire une fonction qui demande à l'utilisateur son âge
function age(){
    var age=Number(prompt("Veuillez introduire votre âge : "))
    return age
}

//écrire un code qui appelle au moins deux de ces fonctions
function fonction(){
    mot(age())
}


fonction()
*/



/*
// Arrays :
var tab = [50,60,100,1]

var result = tab[0] + tab[3]

console.log(result)*/


/*
for(var i=0;i<10;i++){
    console.log(i)
}

var tab = [20,44,60,109,207,12]
for(var i=0;i<=tab.length-1;i++){
    console.log("La valeur est : "+tab[i])
}*/



/*const tab=[10,18,42,35,16,44]
 //somme des cases du tableau
function tabAddition(a){
    var result = tab[0]
    for(let i=1;i<=a.length-1;i++){
        result=result+a[i]
    }    
    console.log(result)
}
tabAddition(tab)*/

/*
const tab=[10,18,42,35,16,44]

function tabPair(a){
    for(let i=0;i<=a.length-1;i++){
        if(a[i]%2==0){
            console.log("La case numéro "+i+" dont la valeur est "+a[i]+" est pair")
        }
    }
}
tabPair(tab)*/

/*
function addition(n,result){
    n=Number(prompt("Veuillez introduire le nombre n. Le programme va ensuite additionner tous les chiffres de 1 à n : "))
    result=0
    for(let i=1;i<=n;i++){
        result=result+i
    }
    console.log(result)
}
var n 
var result
addition(n,result)
*/




/*
const tab=[10,18,42,35,16,44,33,13,17,12]

// trouver la valeur maximale dans un tableau
function maxTab(a){
    var max = a[0]
    for(let i=1;i<=a.length-1;i++){
        if(max<a[i]){
            max=a[i]
        }
    }
    console.log("La valeur max du tableau est : "+max)
}
maxTab(tab)
// calculer le nombre d'éléments pairs dans un tableau
function tabPair(a){
    var j=0
    for(let i=0;i<=a.length-1;i++){
        if(a[i]%2==0){
            j++
        }
    }
    console.log("Le nombre d'éléments pairs est : "+j)
}
tabPair(tab)

// calculer la somme des éléments impairs d'un tableau
function tabImpair(a){
    var somme=0
    for(let i=0;i<=a.length-1;i++){
        if(a[i]%2!=0){
            somme = somme + a[i]
        }
    }
    console.log("La somme des éléments impairs : "+somme)
}
tabImpair(tab)
*/

const tab=[10,18,42,35,16,44,33,13,17,12]

/*
for(let i in tab){
    console.log(i)
}
for(let i of tab){
    console.log(i)
}
*/



/* chercher une valeur dans un tableau
function search(tab,val){
    for(let i of tab){
        if(val==i){
            return true
        }
    }
    return false
}
var val=Number(prompt("Veuillez introduire la valeur que vous souhaitez chercher dans le tableau : "))

if(search(tab,val)){
    console.log(search(tab,val))
}
else{
    console.log(search(tab,val))
}
*/

/*
// chercher une lettre dans une chaîne de charactères
var mot="Hello there and welcome."
function searchChar(tab,letter){
    for(let i of tab){
        if(i==letter)
            return true
    }
    return false
}

var letter=prompt("Veuillez introduire la lettre que vous souhaitez chercher dans le tableau : ")

if(searchChar(mot,letter)){
    console.log(searchChar(mot,letter))
}
else{
    console.log(searchChar(mot,letter))
}


*/

/*
// faire une contion qui transforme une lettre en une autre lettre dans un mot.
var mot="Hello there and welcome."

function changer(mot, index, lettre){
    var mot2=[]
    for(let i=0; i<=mot.length-1; i++){
        if(i!=index)
            mot2[i]=mot[i]
        else
            mot2[i]=lettre
    }
    return mot2
}

console.log(changer(mot, 3,"x").toString())
*/

/*
const mot="Hello there and welcome."

function changer(mot,index,lettre){
    var nouveauMot = ""
    for(let i in mot){
        if(i==index)
            nouveauMot += lettre
        else
            nouveauMot += mot[i]
    }
    return nouveauMot
}
console.log(changer(mot,3,"x"))
*/


/*
// faire un jeu où l'utilisateur va deviner une valeur

var num=39
var guess=Number(prompt("Devinez le numéro"))
while(num!=guess){
    if(num<guess)
    guess=Number(prompt("C'est moins"))

    else
    guess=Number(prompt("C'est plus"))
}
console.log("C'est juste !")
*/


/*
// une fonction qui inverse une chaîne de caractères 
const mot="Hello there and welcome."

function reverse(mot){
    var result = ""
    for(let i in mot){
        result += mot[mot.length-1-i]
    }
    return result;
}
console.log(reverse(mot))*/

// quelques méthodes à connaître : 
// array.charAt(x) : donne le caractère à l'indice x du tableau.
// array.slice(x,y) : retourne les caractères commençant à l'indice x et se terminant à l'indice y du tableau.
// array.toUpperCase() : transforme la chaîne de caractères en majuscule. 
// array.toLowerCase() : transforme la chaîne de caractères en minuscule.
// array = array1.concat(" ",mot2) => array = array1 + " " + array2 
// array = array1.trim() => it deletes all additional blank spaces. (trimStart => only deletes the ones at the start, trimEnd = > only delete the ones at the end)
// array.repeat(x) => affiche le tableau x fois.
// tab.padStart(tab.length+x,"y") => ajoute le caractère y x fois au début du tableau.
// tab.padEnd(tab.length+x,"y") => ajoute le caractère y x fois à la fin du tableau.

// these two are very important :
// array.replace("nom", "name") => remplace "nom" par "name" dans le tableau
// let text="hello there human" ; let tab=text.split(" ") => retourne un tableau contenant ['hello', 'there', 'human'] (elle divise les éléments séparés par un espace " ")



/*
// écrire une fonction qui détecte si un mot est un palindrome

function reverse(mot){
    var result = ""
    for(let i in mot){
        result += mot[mot.length-1-i]
    }
    return result;
}

function palindrome3(mot){
    return mot2==reverse(mot)
}

function palindrome2(mot){
    for(let i in mot){
        if(mot[i]!=mot[mot.length-1-i])
            return false
    }
    return true
}

function palindrome(mot){
    for(let i = 0; i<=mot.length/2 ; i++ ){
        if(mot[i]!=mot[mot.length-1-i])
            return false
    }
    return true
}



// fonction qui calcule le nombre de palindromes qu'il y a dans un tableau de mots.

function palindromTab(mot){
    let j=0
    for(let i in mot){
        if(mot.split(" ")[i]==reverse(mot.split(" ")[i]))
            j += 1
    }
    return j
}
var tableau = "Hello radar there radar"
console.log(palindromTab(tableau));
*/


//-------------
/*
// this "do" + "while" is equivalent to the second while 

do{
    num = Number(prompt("donnez un nombre positive : "))
}while(num<0)

    num = Number(prompt("donnez un nombre positive : "))
while(num<0){
    num = Number(prompt("donnez un nombre positive : "))
}
console.log("yay");*/

/*
var days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday"]
console.log(days);

var jour = days.push("Saturday")

console.log(days)

console.log(jour);*/

//days.push("Saturday") => adds "saturday" at the end of the array

//jour = days.pop() => supprime le dernier élément du tableau et le récupère dans la variable "jour" => days ne contient plus friday, mais jour = "friday "

// days.unshift("Sunday") => adds "sunday" at the start of the array

//days.shift() => same as "days.pop", sauf que c'est au début plutôt qu'à la fin => days ne contient plus "monday", et jour=monday

//------------------------
/*
// node list : un noeud dans l'arbre DOM
var elm = document.querySelectorAll("h1") //=> return the first h1 tag in the html 
var elm2 = document.querySelectorAll("h1") //=> return all h1 elements as a node
var elm3 = document.getElementById("nom") //=> return the one element with that id "nom"
var elm4 = document.getElementsByClassName("nom2") //=> return the elements with the class "nom"

console.log(elm);
console.log(elm2);
console.log(elm3);
console.log(elm4);*/



/*
var element1 = document.getElementById("nom")
var maClass = element1.getAttribute('nom2')
console.log(maClass);
element1.setAttribute('class', 'salam')

console.log(maClass);*/