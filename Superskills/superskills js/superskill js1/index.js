var sentence = prompt("Introduce your sentence, please.")
var voyelle = 0
for(let i in sentence){
    if(sentence[i]=="a" || sentence[i]=="e" || sentence[i]=="i" || sentence[i]=="o" || sentence[i]=="u" || sentence[i]=="y" || sentence[i]=="A" || sentence[i]=="E" || sentence[i]=="I" || sentence[i]=="O" || sentence[i]=="U" || sentence[i]=="Y"){
        voyelle+=1
    }
}

console.log("La longueur de la phrase : "+sentence.length);

console.log(("Le nombre de mots dans la phrase : "+sentence.split(" ").length));

console.log("Le nombre de voyelles dans la phrase : " +voyelle);