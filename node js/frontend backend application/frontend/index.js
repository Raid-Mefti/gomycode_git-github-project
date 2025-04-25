const axios = window.axios

const email = document.getElementById('email')
const name = document.getElementById('name')
const password = document.getElementById('password')

document.getElementById('btn').addEventListener('click', async() => {
    var ok = true
    if(email.value == ""){
        ok = false
        document.getElementById('msgEmail').innerHTML = `
            <p class="redMsg">Email vide</p>
        `
    }
    if(name.value == ""){
        ok = false
        document.getElementById('msgName').innerHTML = `
            <p class="redMsg">Name vide</p>
        `
    }
    if(password.value == ""){
        ok = false
        document.getElementById('msgPass').innerHTML = `
            <p class="redMsg">Password vide</p>
        `
    }
    if(ok){
        document.getElementById('msgEmail').innerHTML = ''
        document.getElementById('msgName').innerHTML = ''
        document.getElementById('msgPass').innerHTML = ''
        const data = {email: email.value, name : name.value, password : password.value}
        const newUser = await axios.post('http://localhost:8080/users', data)
        //console.log("hi");
        //console.log(newUser);
    
        if(newUser){
            console.log('ajout avec succès.');
            document.getElementById('ajout').innerHTML = `
                <p class="green">Ajout avec succès.</p>
            `
        }else{
            console.log('échec');
        }

    }

})

document.getElementById('btn_afficherUsers').addEventListener('click', async() => {
    const allUsers = await axios.get('http://localhost:8080/users')
    console.log("hi");
    console.log(allUsers.data);
    console.log(allUsers.data[0]);
/*
    for(i in allUsers.data){
        document.getElementById('users_div').innerHTML+=`
            <div id="users_div${i}">
            <p>Name : ${allUsers.data[i].name}</p>
            <p>Email : ${allUsers.data[i].email}</p>
            <p>Password : ${allUsers.data[i].password}</p>
        </div>
        `

    }
*/
//or we use map :
    maDiv = document.getElementById('users_div')
    maDiv.innerHTML=' '
    allUsers.data.map(user => (
        maDiv.innerHTML+=`
            <div id="users_div2">
            <h2>Name : ${user.name}</h2>
            <p>Email : ${user.email}</p>
            <p>Password : ${user.password}</p>
        </div>`
    ))
})
