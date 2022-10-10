/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('/cars.json')
    .then(x => x.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            let card = document.createElement('div')
            card.className = 'card'
            card.style.display = 'flex'
            card.style.flexFlow = 'column wrap'
            card.style.backgroundColor = 'rgb(224, 232, 239)'
            card.style.border = '3px solid black'
            card.style.margin = '5px'
            
            let cardBody = document.createElement('div')
            cardBody.className = 'card_body'
            cardBody.style.display = 'flex'
            cardBody.style.justifyContent = 'center'
            cardBody.style.alignItems = 'center'
            cardBody.style.margin - '5px'

            let carFrame = document.createElement('div')
            carFrame.className = 'card_frame'
            carFrame.style.display = 'flex'
            carFrame.style.border = '2px'
            carFrame.style.flexDirection = 'column'
            carFrame.style.justifyContent = 'center'
            carFrame.style.alignItems = 'center'

            let carBrand = document.createElement('h1')
            carBrand.className = 'card_title'
            carBrand.style.color = 'rgb(132, 27, 27)'
            carBrand.style.alignContent = 'center'
            carBrand.style.margin = '0'
            carBrand.style.border = '30px'
            carBrand.innerText = data[i].brand

            let carModel = document.createElement('p')
            carModel.innerText = data[i].models
           
            card.appendChild(cardBody)
            cardBody.appendChild(carFrame)
            carFrame.appendChild(carBrand)
            carFrame.appendChild(carModel)
            output.appendChild(card)
        }
    })