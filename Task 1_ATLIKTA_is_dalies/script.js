/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Nepavyko paleisti funkcijos su input type="submit"

// const form = document.querySelector('form');

// form.addEventListener('submit', weightConverter(Event), {
//     Event.preventDefault()
// })

// document.getElementById('submit').addEventListener("click", weightConverter);

// function weightConverter() {
//     let x = document.getElementById('search').value;

//     let cardsHolder = document.createElement('div')
//     cardsHolder.style.backgroundColor = 'white'
//     cardsHolder.style.display = 'flex'
//     cardsHolder.style.flexFlow = 'column'
//     cardsHolder.style.margin = '50px auto'
//     cardsHolder.style.justifyContent = 'center'

//     let poundCard = document.createElement('input')
//     poundCard.value = 'Svarai (lb): ' + x * 2.2046;

//     let gramCard = document.createElement('input')
//     gramCard.value = 'Gramai (g): ' + x / 0.00100;

//     let ounceCard = document.createElement('input')
//     ounceCard.value = 'Uncijos (oz): ' + x * 35.274;
    
//     cardsHolder.appendChild(poundCard)
//     cardsHolder.appendChild(gramCard)
//     cardsHolder.appendChild(ounceCard)  
//     output.appendChild(cardsHolder)
// }


// Funkcija veikia tik pakeitus input type="submit" į input type="button"
document.getElementById("submit-btn").addEventListener("click", weightConverter);

function weightConverter() {
    let x = document.getElementById('search').value;

    let cardsHolder = document.createElement('div')
    cardsHolder.style.backgroundColor = 'white'
    cardsHolder.style.display = 'flex'
    cardsHolder.style.flexFlow = 'column'
    cardsHolder.style.margin = '50px auto'
    cardsHolder.style.justifyContent = 'center'

    let poundCard = document.createElement('input')
    poundCard.value = 'Svarai (lb): ' + x * 2.2046;

    let gramCard = document.createElement('input')
    gramCard.value = 'Gramai (g): ' + x / 0.00100;

    let ounceCard = document.createElement('input')
    ounceCard.value = 'Uncijos (oz): ' + x * 35.274;
    
    cardsHolder.appendChild(poundCard)
    cardsHolder.appendChild(gramCard)
    cardsHolder.appendChild(ounceCard)  
    output.appendChild(cardsHolder)
}