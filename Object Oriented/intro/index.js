class cat{
    constructor(type, weight, race){
        this.type = type
        this.weight = weight
        this.race = race
    }

    getType(){
        return this.type
    }
    setType(newType){
        this.type = newType
    }

    getWeight(){
        return this.weight
    }
    setWeight(newWeight){
        this.weight = newWeight
    }

    getRace(){
        return this.race
    }
    setRace(newRace){
        this.type = newRace
    }

}

var sylvestre = new cat("tuxedo", "fat", "noble")



//////////////////:

class personne{
    constructor(fullName, age, gender){
        this.fullName = fullName
        this.age = age
        this.gender = gender
        this.unUne = ""
    }
    getFullName(){
        return this.fullName
    }
    setFullName(newFullName){
        this.fullName = newFullName
    }

    sePresenter(){
        //this.unUne = "un" ? this.gender == "homme" : "une"; // this is false
        this.unUne = (this.gender == "homme") ? "un" : "une"
        console.log(`je suis ${this.fullName}, je suis ${this.unUne} ${this.gender}, j'ai ${this.age}`);
    }
}

class employe extends personne{
    constructor(fullName, age, gender, salaire){
        super(fullName, age, gender)
        this.salaire = salaire
    }
    sePresenter(){ // si cette fonction n'existe pas, il execute sePresenter de la première classe
        this.unUne = (this.gender == "homme") ? "un" : "une"
        console.log(`je suis ${this.fullName}, je suis ${this.unUne} ${this.gender}, j'ai ${this.age} et mon salaire est de ${this.salaire}`);
    }

}
var khedam = new employe("moh", 34, "homme", 4700000)

khedam.sePresenter()
