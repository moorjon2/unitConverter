/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberInput = document.getElementById("numberIn")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function converter(numIn) {
    let meterToFeet = numIn * 3.281
    let feetToMeter = numIn / 3.281

    let literToGallon = numIn * 0.264
    let gallonToLiter = numIn / 0.264

    let kiloToPound = numIn * 2.204
    let poundToKilo = numIn / 2.204

    lengthEl.innerText = `${numIn} meters = ${meterToFeet.toFixed(3)} feet | ${numIn} feet = ${feetToMeter.toFixed(3)} meters`
    volumeEl.innerText = `${numIn} liters = ${literToGallon.toFixed(3)} gallons | ${numIn} gallons = ${gallonToLiter.toFixed(3)} liters`
    massEl.innerText = `${numIn} kilos = ${kiloToPound.toFixed(3)} pounds | ${numIn} pounds = ${poundToKilo.toFixed(3)} kilos`
}


convertBtn.addEventListener("click", function() {
    converter(Number(numberInput.value))
})