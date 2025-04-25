/*const express = require("express")

const app = express() 

const port = 8080 //on peut lui donner n'importe quelle valeur tant que c'est 4 chiffres.

// get, c'est pour obtenir quelque chose du server
// post, c'est pour insérer quelque chose dans le server

app.get("*", (req,res) => { //req et res peuvent avoir n'importe quel nom, mais il faut retenir que le premier paramètre et la requête, et le second est la réponse (request, response)
    res.end("Hello World")
});//l'étoile *, c'est pour dire que ça marche dans tous les cas, dans tous les fichiers du server
//si on a fait par exemple : app.get("/user",...), notre app.get ne marche que dans le dossier "user", il faudra faire : `http://localhost:${port}/user`

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
})
    */



/*
const express = require("express")

const app = express() 

const port = 8080

app.get('/user/:idUser', (req,res) => { //write http://localhost:8080/user/123, it'll print "123" as the ID
    const id = req.params.idUser
    res.end("l'id de l'utilisateur est : " +id);
})

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
})

app.get('/user', (req, res) => {
    res.send('hello there')

})
*/


/*
const express = require("express")

const app = express()

const port = 8080

app.get("/user", (req,res)=>{
    res.send('Hello there')
})

app.listen(port, ()=>{
    console.log(`server running at : http://localhost:${port}`);
})
*/

/*
// let's add a middleware :
const express = require("express")

const app = express()

const port = 8080

const myLogger = (req,res,next) =>{ //le next signifie qu'on passe à la suite
    if(req.params.isAdmin == "true"){
        console.log("Accès autorisé.");
        next();
    }else{
        console.log("Accès non autorisé.");
        res.send("Accès non autorisé.")
    }
}

app.get('/user/:isAdmin', myLogger, (req, res) => { //si (isAdmid == "true"), on passe à ça grâce au next()
    res.send("Hello World !")
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);

})

*/

var isConnected = "true"

const express = require("express")

const app = express()

const port = 8080

const connectionVerify = (req, res, next) => {
    if(isConnected == "true"){
        console.log("Accès autorisé.");
        next()
    }else{
        console.log("Accès non autorisé.");
        res.send("Accès non autorisé.")
    }
}

app.get("*", connectionVerify, (req, res) => {
    res.send("You did it, you're logged, it worked !")
})
app.listen(8080, () =>{
    console.log(`server is running at http://localhost:8080`);
})