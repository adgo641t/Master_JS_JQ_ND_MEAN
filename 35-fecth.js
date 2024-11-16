'use strict'

 // - Fetch (Ajax) y peticiones a servicios / API Rest

 var usuarios = [];
 var div_user = document.querySelector("#usuarios");

 var div_ervin = document.querySelector("#Ervin");


    getUser()
    .then(data => data.json())
    .then(users => {
        
        ListUser(users);
        return getInfo();  

    }).then(data => {
        console.log(data);
        return getErvin();  
    })
    .then(data => data.json())
      .then(ervin => {
    
        ListErvin(ervin)
    })
    .catch(error => {
        console.log(error);
    });

// -- Hacer la Peticion
function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users");
}


function getErvin() {
    return fetch("https://jsonplaceholder.typicode.com/users/2");
}

// -- Hacer un recorrido con Map y mostrarlo
function ListUser(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i+" " + user.name;

        div_user.appendChild(nombre)
    });
}


function getInfo() {
    var professor = {
        nombre: 'adrian',
        apellidos: 'ds'
    }

    return new Promise((resolve,reject) => {
        var prof_string;

        setTimeout(() => {
             prof_string = JSON.stringify(professor);

             if(typeof prof_string != 'string'|| prof_string == '') {
                return reject('error');
            }
    
            return resolve(prof_string);
        },3000)

    })
}

function ListErvin(ervin) {
        let nombre = document.createElement('h2');

        nombre.innerHTML = ervin.name;

        div_ervin.appendChild(nombre)
};
