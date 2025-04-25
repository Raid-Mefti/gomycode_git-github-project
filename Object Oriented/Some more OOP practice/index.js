/*
class ticketAchat{
    constructor(){
        this.articles = []
    }
    getArticles(){
        return this.articles
    }
    ajouterArticle(article){
        this.articles.push(article)
    }
    montant(){
        var montant = 0
        for(let i of this.articles){
            montant += i.prix
        }
        return montant
    }
}

var monTicket = new ticketAchat()

monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})
monTicket.ajouterArticle({Nom : "sebat", prix : 5000})


//console.log(monTicket.montant());

class personne{
    constructor(fullName, age){
        this.fullName = fullName
        this.age = age
    }
    sePresenter(){
        console.log(`hello I'm ${this.fullName} and I'm ${this.age}`)
    }
    getFullName(){
        return this.fullName
    }
    setFullName(newFullName){
        this.fullName = newFullName
    }
    getAge(){
        return this.age
    }
    setAge(newAge){
        this.age = newAge
    }
}


class employe extends personne{
    constructor(fullName, age, post){
        super(fullName,age)
        this.post = post
    }
    setPost(newPost){
        this.post = newPost
    }
    getPost(){
        return this.post
    }
    sePresenter(){
        super.sePresenter()
        console.log(`and my job is ${this.post}`);
    }
}

var humain = new employe("mahdi", 23, "prof")

humain.sePresenter()*/


//récursivité :

function fact(n){
    if(n == 0 || n == 1)
        return 1
    else
        return n*fact(n-1)
}
//console.log(fact(5));

function power(n,x){
    if(x == 1)
        return n
    else if(x == 0)
        return 1
    else
        return n*power(n,x-1)
}
//console.log(power(5,3));

function fibonacci(n){
    if(n==0)
        return 0
    else if(n==1)
        return 1
    else
        return fibonacci(n-1)+(fibonacci(n-2))
}
console.log(fibonacci(7));
/*
fibonacci(7) => fibonacci(6) + fibonacci(5) => (fibonacci(5)+fibonacci(4)) + (fibonacci(4)+fibonacci(3))
=> (fibonacci(4)+fibonacci(3)+fibonacci(3)+fibonacci(2)) + (fibonacci(3)+fibonacci(2)) + (fibonacci(2)+fibonacci(1))
=> fibonacci(3)+fibonacci(2) + fibonacci(2)+fibonacci(1) + fibonacci(2)+fibonacci(1) +fibonacci(1)+fibonacci(0) +((fibonacci(2)+fibonacci(1)))
+fibonacci(1)+fibonacci(0) + fibonacci(1)+fibonacci(0)+fibonacci(0)


=> fibonacci(2) + fibonacci(1) + fibonacci(1)+ fibonacci(1)+fibonacci(1) + fibonacci(1) + fibonacci(1) + fibonacci(1) + fibonacci(1) + fibonacci(1)
+ fibonacci(1) + fibonacci(1) */
