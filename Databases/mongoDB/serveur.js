const mongoose = require('mongoose') // we could have named this const anything, but generally we give it the same name as the library we're using
//"require" we always put it when we want to put a library in a constant

const URI = 'mongodb+srv://raidmefti:darkcrazymak@cluster0.dtypp.mongodb.net/myTest' //the link we get from mongoDB (atlast in my case)
// we could name URI anything we want, but that's what we generally call our database mongo link

const fournisseurSchema = new mongoose.Schema({ //ça doit ressembler à notre schéma dans notre base de donnée
    firstName : {type:String, required:true}, //required means it has to be used, it's not optional
    lastName : {type:String, required:true},
    companyName : {type:String, required:true},
    //dabs ce casn "required" n'est pas vraiment nécessaire car on importe notre base de donnée déjà préparée depuis mongoDB
    //si on devait créer notre propre base de donnée depuis vsCode, "required" est alors important. Si on essaye d'ajouter un élément mais qu'il manque un attribut, il va générer une erreur

})

const Fournisseur = mongoose.model("fournisseurs",fournisseurSchema) //notre schéma doit avoir un nom, on l'a appelé "Fournisseur"
// "fournisseurs" c'est le nom dans la base de donnée, et "fournisseurSchema" c'est notre schéma qu'on a défini plus haut
// remarque : "fournisseurs" et "fournisseurSchema" (l'un est défini sur vsCode, l'autre sur Mongo) doivent être identiques
// exectueur de requête : Fournisseur
// le modèle : fournisseurs
// le schéma du modèle : fournisseurSchema

mongoose.connect(URI).then( () =>{
    console.log("Successfully connected to MongoDB !");
}).catch((err) => {
    console.log("Error connecting to MongoDB : ", err.message);
})
//"err" est le paramètre de catch(), on peut l'appeler ce qu'on veut mais c'est une convention de l'appeler "err" pour "erreur"
//catch() doit obligatoirement recevoir un paramètre

async function getFournisseur() {
    const mesFournisseurs = await Fournisseur.find() 
    //Fournisseur.find() est équivalent à db.fournisseurs.find() sur mongoDB
    console.log("hi");
    console.log((mesFournisseurs));

}

getFournisseur()
