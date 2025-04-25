const personnes = [
    { nom: "Alice Dupont", age: 28, ville: "Paris", profession: "Développeur" },
    { nom: "Benjamin Morel", age: 35, ville: "Lyon", profession: "Designer" },
    { nom: "Carla Roux", age: 22, ville: "Marseille", profession: "Étudiante" },
    { nom: "David Petit", age: 40, ville: "Toulouse", profession: "Ingénieur" },
    { nom: "Emma Garnier", age: 30, ville: "Bordeaux", profession: "Chef de projet" },
    { nom: "Fabien Lefevre", age: 26, ville: "Nice", profession: "Marketing" },
    { nom: "Gabrielle Robert", age: 32, ville: "Nantes", profession: "Développeuse" },
    { nom: "Hugo Martin", age: 29, ville: "Strasbourg", profession: "Analyste" },
    { nom: "Isabelle Richard", age: 24, ville: "Lille", profession: "Designer graphique" },
    { nom: "Julien Dubois", age: 33, ville: "Grenoble", profession: "Product Owner" }
];

document.getElementById("button").addEventListener("click", () =>{
    const divList = document.getElementById("personnes")
    var index = Number(document.getElementById("personneIndex").value)
    console.log('lindex est'+index);
    console.log(personnes[index]);
    if(document.getElementById("personneIndex").value >= 1 && document.getElementById("personneIndex").value <= personnes.length){
        divList.innerHTML += `<div class="innerDiv">
                                <h1>${personnes[index-1].nom}</h1>
                                <p>Age : ${personnes[index-1].age} <br>
                                    Habitat : ${personnes[index-1].ville} <br>
                                    profession : ${personnes[index-1].profession}<br>
                                </p>
                            </div>`
    }
    else if(document.getElementById("personneIndex").value == 0){
        console.log("hi");
        for(let i of personnes){
            divList.innerHTML += `<div class="innerDiv">
                                    <h1>${i.nom}</h1>
                                    <p>Age : ${i.age} <br>
                                        Habitat : ${i.ville} <br>
                                        profession : ${i.profession}<br>
                                    </p>
                                </div>`
        }
    }
    else{
        alert(`Veuillez introduire une valeur valide, entre 1 et ${personnes.length}.`)
    }

    
    document.getElementById("personneIndex").value = ""

})

// the .find method :

    var exist = personnes.find(cafard => cafard.nom == "Alice Dupont") //I name it "cafard" to show that I could name it anything I want
    var exist = personnes.find(cafard => cafard.nom.includes("Alice")) //This method finds anyone with the name Alice, the first one
    //finds only the one names Alice Dupont (the whole name)
    //console.log(exist);






    const personnes2 = [
        { name: "Alice", age: 28, gender: "female", profession: "doctor", city: "New York" },
        { name: "Bob", age: 34, gender: "male", profession: "engineer", city: "San Francisco" },
        { name: "Catherine", age: 25, gender: "female", profession: "teacher", city: "Chicago" },
        { name: "David", age: 42, gender: "male", profession: "lawyer", city: "Houston" },
        { name: "Emma", age: 30, gender: "female", profession: "designer", city: "Los Angeles" },
        { name: "Frank", age: 38, gender: "male", profession: "architect", city: "Miami" },
        { name: "Grace", age: 27, gender: "female", profession: "nurse", city: "Boston" },
        { name: "Henry", age: 33, gender: "male", profession: "developer", city: "Seattle" },
        { name: "Isabella", age: 29, gender: "female", profession: "artist", city: "Portland" },
        { name: "Jack", age: 40, gender: "male", profession: "chef", city: "Dallas" },
        { name: "Karen", age: 35, gender: "female", profession: "journalist", city: "Denver" },
        { name: "Leo", age: 31, gender: "male", profession: "photographer", city: "Atlanta" },
        { name: "Maria", age: 26, gender: "female", profession: "scientist", city: "Austin" },
        { name: "Nathan", age: 39, gender: "male", profession: "pilot", city: "Las Vegas" },
        { name: "Olivia", age: 32, gender: "female", profession: "writer", city: "Phoenix" },
        { name: "Paul", age: 41, gender: "male", profession: "accountant", city: "Orlando" },
        { name: "Quinn", age: 28, gender: "female", profession: "engineer", city: "Philadelphia" },
        { name: "Robert", age: 36, gender: "male", profession: "mechanic", city: "San Diego" },
        { name: "Sophia", age: 24, gender: "female", profession: "student", city: "Baltimore" },
        { name: "Tom", age: 37, gender: "male", profession: "salesman", city: "Detroit" }
    ];


document.getElementById("button2").addEventListener("click", () =>{
    const divList = document.getElementById("personnes")
    var exist = personnes2.filter(person => person.gender == 'male')
    console.log(exist);
    var index = Number(document.getElementById("personneIndex").value)
    console.log(exist[index]);
    if(document.getElementById("personneIndex").value >= 1 && document.getElementById("personneIndex").value <= exist.length){
        divList.innerHTML += `<div class="innerDiv">
                                <h1>${exist[index-1].name}</h1>
                                <p>Age : ${exist[index-1].age} <br>
                                    Habitat : ${exist[index-1].gender} <br>
                                    profession : ${exist[index-1].profession}<br>
                                    city : ${exist[index-1].city}<br>
                                </p>
                            </div>`
    }
    else if(document.getElementById("personneIndex").value == 0){
        for(let i of exist){
            divList.innerHTML += `<div class="innerDiv">
                                    <h1>${i.name}</h1>
                                    <p>Age : ${i.age} <br>
                                        Habitat : ${i.gender} <br>
                                        profession : ${i.profession}<br>
                                        city : ${i.city}<br>
                                    </p>
                                </div>`
        }
    }
    else{
        alert(`Veuillez introduire une valeur valide, entre 1 et ${personnes2.length}.`)
    }

    document.getElementById("personneIndex").value = ""

})





/// same using the map function
document.getElementById("button3").addEventListener("click", () =>{
    const divList = document.getElementById("personnes")
    var exist = personnes2.filter(person => person.gender == 'male')
    console.log(exist);
    var index = Number(document.getElementById("personneIndex").value)
    console.log(exist[index]);
    if(document.getElementById("personneIndex").value >= 1 && document.getElementById("personneIndex").value <= exist.length){
        divList.innerHTML += `<div class="innerDiv">
                                <h1>${exist[index-1].name}</h1>
                                <p>Age : ${exist[index-1].age} <br>
                                    Habitat : ${exist[index-1].gender} <br>
                                    profession : ${exist[index-1].profession}<br>
                                    city : ${exist[index-1].city}<br>
                                </p>
                            </div>`
    }
    else if(document.getElementById("personneIndex").value == 0){
        exist.map(malePersonne =>
            divList.innerHTML += `<div class="innerDiv">
                                    <h1>${malePersonne.name}</h1>
                                    <p>Age : ${malePersonne.age} <br>
                                        Habitat : ${malePersonne.gender} <br>
                                        profession : ${malePersonne.profession}<br>
                                        city : ${malePersonne.city}<br>
                                    </p>
                                </div>`
        )
    }
    else{
        alert(`Veuillez introduire une valeur valide, entre 1 et ${personnes2.length}.`)
    }

    document.getElementById("personneIndex").value = ""

})


// just trying some stuff

document.getElementById("button4").addEventListener("click", () => {
    /*const divList=document.getElementById("personnes")
    var list = personnes2
    var input = Number(document.getElementById("personneIndex").value)
    
    if(input >= 1 && input <= list.length){
        if(list[input-1].gender == "male"){
            divList.innerHTML += `<div class="innerDiv homme" id="matricule${input-1}">
                                    <h1>${list[input-1].name}</h1>
                                    <p>Age : ${list[input-1].age} <br>
                                        Habitat : ${list[input-1].gender} <br>
                                        profession : ${list[input-1].profession}<br>
                                        city : ${list[input-1].city}<br>
                                        <span id="matricule">${input}</span>
                                    </p>
                                </div>`
        }
        else{
            if(list[input-1].gender == "female"){
                divList.innerHTML += `<div class="innerDiv femme" id="matricule${input-1}">
                                    <h1>${list[input-1].name}</h1>
                                    <p>Age : ${list[input-1].age} <br>
                                        Habitat : ${list[input-1].gender} <br>
                                        profession : ${list[input-1].profession}<br>
                                        city : ${list[input-1].city}<br>
                                        <span id="matricule">${input}</span>
                                    </p>
                                </div>`
            }
        }

    }*/
    if(document.getElementById("personneIndex").value == 0){
        for(let i in list){
            if(list[i].gender == "male"){
                divList.innerHTML += `<div class="innerDiv homme" id="id="matricule${i}">
                                        <h1>${list[i].name}</h1>
                                        <p>Age : ${list[i].age} <br>
                                            Habitat : ${list[i].gender} <br>
                                            profession : ${list[i].profession}<br>
                                            city : ${list[i].city}<br>
                                            <span id="matricule">${i}</span>
                                        </p>
                                    </div>`
            }
            else{
                if(list[i].gender == "female"){
                    divList.innerHTML += `<div class="innerDiv femme" id="matricule${i}">
                                        <h1>${list[i].name}</h1>
                                        <p>Age : ${list[i].age} <br>
                                            Habitat : ${list[i].gender} <br>
                                            profession : ${list[i].profession}<br>
                                            city : ${list[i].city}<br>
                                            <span id="matricule">${i}</span>
                                        </p>
                                    </div>`
                }
            }
        }
    }
    else{
        alert(`Veuillez introduire une valeur valide, entre 1 et ${personnes2.length}.`)
    }

    document.getElementById("personneIndex").value = ""

})

for(i in personnes2){
    document.getElementById(i).addEventListener('click',()=>{
        const divList=document.getElementById("personnes")
        var list = personnes2
        var input = Number(document.getElementById("personneIndex").value)
        
        if(input >= 1 && input <= list.length){
            if(list[input-1].gender == "male"){
                divList.innerHTML += `<div class="innerDiv homme" id="matricule${input-1}">
                                        <h1>${list[input-1].name}</h1>
                                        <p>Age : ${list[input-1].age} <br>
                                            Habitat : ${list[input-1].gender} <br>
                                            profession : ${list[input-1].profession}<br>
                                            city : ${list[input-1].city}<br>
                                            <span id="matricule">${input}</span>
                                        </p>
                                    </div>`
            }
            else{
                if(list[input-1].gender == "female"){
                    divList.innerHTML += `<div class="innerDiv femme" id="matricule${input-1}">
                                        <h1>${list[input-1].name}</h1>
                                        <p>Age : ${list[input-1].age} <br>
                                            Habitat : ${list[input-1].gender} <br>
                                            profession : ${list[input-1].profession}<br>
                                            city : ${list[input-1].city}<br>
                                            <span id="matricule">${input}</span>
                                        </p>
                                    </div>`
                }
            }
    
        }
    })
}

document.getElementsByClassName(`innerDiv`).addEventListener("click", () => {
    const divList=document.getElementById("personnes")

    var mat = document.getElementById(`matricule`).innerText
    console.log(mat);
    const body = document.getElementById("body")
    //if(Number(matricule.innerText).gender == "male")
    body.innerHTML = `<div class="outerDiv femme" id="outerDiv">
                                        <img src="360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg" alt="">
                                        <h1>${mat.name}</h1>
                                        <p>Age : ${mat.age} <br>
                                            Habitat : ${mat.gender} <br>
                                            profession : ${mat.profession}<br>
                                            city : ${mat.city}<br>
                                        </p>
                                    </div>`
})

