/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const element = document.getElementById('btn__element');
element.addEventListener('click', calculate)

let click = 0

function calculate () {
    click += 1
    document.getElementById('btn__state').innerHTML = click
}