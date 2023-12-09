/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const inputCont = document.querySelector(".input-container");
const outCont = document.querySelector(".out-container");

convertBtn.addEventListener("click", () => {
    clearArea()
    let inputVal = parseFloat(inputEl.value);
    if(isNaN(inputVal) || inputVal === ""){
        alert("Please enter a valid number")
    } else {
        length(inputVal);
        volume(inputVal);
        mass(inputVal); // Pass inputVal as an argument
    }
});

function clearArea(){
    outCont.innerHTML = ""
}
function length(inputValue){
     let meterToFeet = (inputValue * 3.281).toFixed(3)
    let feettoMeters = (inputValue * 0.3048).toFixed(3)
    let divNew = document.createElement("div");
    divNew.setAttribute('class',"output-card")
    divNew.innerHTML= `
        <h3>Length (Meter/Feet)</h3>
        <p> ${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feettoMeters} meters</p>
    `
    outCont.appendChild(divNew);
}
function volume(inputValue){
    let literToGallon = (inputValue *  0.264172).toFixed(3)
   let gallaonToLiter = (inputValue * 3.78541).toFixed(3)
   let divNew = document.createElement("div");
   divNew.setAttribute('class',"output-card")
   divNew.innerHTML= `
       <h3>Volume (Liter/gallaon)</h3>
       <p> ${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallons = ${gallaonToLiter} liters</p>
   `
   outCont.appendChild(divNew);
}
function mass(inputValue){
    let kgToPounds = (inputValue *  2.20462).toFixed(3)
   let poundsToKg = (inputValue * 0.453592).toFixed(3)
   let divNew = document.createElement("div");
   divNew.setAttribute('class',"output-card")
   divNew.innerHTML= `
       <h3>Volume (Liter/gallaon)</h3>
       <p> ${inputValue} kilograms = ${kgToPounds} pounds | ${inputValue} pounds = ${poundsToKg} kilograms</p>
   `
   outCont.appendChild(divNew);
}
