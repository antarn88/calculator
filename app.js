"use strict";

const display = document.querySelector(".display");
const additionBtn = document.querySelector(".addition");
const subtractionBtn = document.querySelector(".subtraction");
const multiplicationBtn = document.querySelector(".multiplication");
const divisionBtn = document.querySelector(".division");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");
const dotBtn = document.querySelector(".dot");
const clearBtn = document.querySelector(".clear");
const equalSignButton = document.querySelector(".equal-sign-button");

const additionAction = () => {
    display.textContent += "+";
};

const subtractionAction = () => {
    display.textContent += "-";
};

const multiplicationAction = () => {
    display.textContent += "x";
};

const divisionAction = () => {
    display.textContent += "÷";
};

const oneAction = () => {
    display.textContent += "1";
};

const twoAction = () => {
    display.textContent += "2";
};

const threeAction = () => {
    display.textContent += "3";
};

const fourAction = () => {
    display.textContent += "4";
};

const fiveAction = () => {
    display.textContent += "5";
};

const sixAction = () => {
    display.textContent += "6";
};

const sevenAction = () => {
    display.textContent += "7";
};

const eightAction = () => {
    display.textContent += "8";
};

const nineAction = () => {
    display.textContent += "9";
};

const zeroAction = () => {
    display.textContent += "0";
};

const dotAction = () => {
    display.textContent += ".";
};

const clearAction = () => {
    display.textContent = "";
};

const equalAction = () => {

};

additionBtn.addEventListener("click", additionAction);
subtractionBtn.addEventListener("click", subtractionAction);
multiplicationBtn.addEventListener("click", multiplicationAction);
divisionBtn.addEventListener("click", divisionAction);
oneBtn.addEventListener("click", oneAction);
twoBtn.addEventListener("click", twoAction);
threeBtn.addEventListener("click", threeAction);
fourBtn.addEventListener("click", fourAction);
fiveBtn.addEventListener("click", fiveAction);
sixBtn.addEventListener("click", sixAction);
sevenBtn.addEventListener("click", sevenAction);
eightBtn.addEventListener("click", eightAction);
nineBtn.addEventListener("click", nineAction);
zeroBtn.addEventListener("click", zeroAction);
dotBtn.addEventListener("click", dotAction);
clearBtn.addEventListener("click", clearAction);
equalSignButton.addEventListener("click", equalAction);
