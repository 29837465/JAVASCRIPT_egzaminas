/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', showUsers)

function showUsers() {
    document.getElementById('message').innerHTML = ' ';

    fetch(ENDPOINT) 
    .then(x => x.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            let cardHolder = document.createElement('div')
            cardHolder.className = 'Frame'
            cardHolder.style.display = 'flex'
            cardHolder.style.justifyContent = 'center'
            cardHolder.style.border = '2px solid black'
            cardHolder.style.margin = '2px'
            cardHolder.innerText += data[i].login + ' ' + '->' + ' ' + data[i].avatar_url

            output.appendChild(cardHolder) 
        }
    })
}