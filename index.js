/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-box")
const btnEl = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")



document.getElementById("input-box")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("convert-btn").click();
    }
});

function convert() {
    // convert Length
    lengthEl.innerHTML = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * 0.3048).toFixed(3)} meters`
    // convert Volume
    volumeEl.innerHTML = `${inputEl.value} litres = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value * 3.78541).toFixed(3)} litres`
    // convert Mass
    massEl.innerHTML = `${inputEl.value} kilograms = ${(inputEl.value * 2.20462).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value * 0.453592).toFixed(3)} kilograms`
    }

