//defining DOM elements
const text = document.querySelector(".text")
const numPad = document.querySelectorAll(".num")

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".operate");
const clear = document.querySelector(".clear");
//DOM functionality 
numPad.forEach((numPad) => {
    numPad.addEventListener('click', () => {
        display += numPad.textContent;
        text.textContent = display;        
    });
});

add.addEventListener("click", () =>{
    
    if (sum === 0){
        sum = parseInt(display);
        display = "";
        text.textContent = display;
    }
    else {
        secondNum = parseInt(display);
        display = "";
        text.textContent = display;
        operate(sum, secondNum);
        console.log(sum);
    }
    opp = "add";
})
subtract.addEventListener("click", () =>{
    if (sum === 0){
        sum = parseInt(display);
        display = "";
        text.textContent = display;
    }
    else {
        secondNum = parseInt(display);
        display = "";
        text.textContent = display;
        operate(sum, secondNum);
        console.log(sum);
    }
    opp = "subtract";
})
multiply.addEventListener("click", () =>{
    if (sum === 0){
        sum = parseInt(display);
        display = "";
        text.textContent = display;
    }
    else {
        secondNum = parseInt(display);
        display = "";
        text.textContent = display;
        operate(sum, secondNum);
        console.log(sum);
    }
    opp = "multiply";
})
divide.addEventListener("click", () =>{
    if (sum === 0){
        sum = parseInt(display);
        display = "";
        text.textContent = display;
    }
    else {
        secondNum = parseInt(display);
        display = "";
        text.textContent = display;
        operate(sum, secondNum);
        console.log(sum);
    }
    opp = "divide";
})
equal.addEventListener("click", () =>{
    secondNum = parseInt(display);
    operate(sum, secondNum);
    display = sum;
    text.textContent = display;
    sum = 0;
    secondNum = 0;
    opp = "";
    
})

clear.addEventListener("click", () => {
    display = "";
    text.textContent = display;
    sum = 0;
    secondNum = 0;
    opp = "";
})

//variables
let display = "";
let sum = 0;
let secondNum = 0;
let opp = 
//functions
function addFunc(num1, num2){
    sum = num1 + num2;
    sum = sum.toFixed(2);
}

function subtractFunc(num1, num2){
    sum = num1 -num2;  
    sum = sum.toFixed(2);  
}

function multiplyFunc(num1, num2){
    sum = num1 * num2;
    sum = sum.toFixed(2);    
}

function divideFunc(num1, num2){
    if ( num2 == 0){
        alert("you can't divide by 0 idiot");
    }
    else {
        sum = num1 / num2;
        sum = sum.toFixed(2);
    }
}

function operate(num1, num2){
    if (opp == "add"){
        addFunc(num1, num2);
    }
    else if (opp == "subtract"){
        subtractFunc(num1, num2);
    }
    else if (opp == "multiply"){
        multiplyFunc(num1, num2);
    }
    else if (opp =="divide") {
        divideFunc(num1, num2);
    }
    else {
        console.log("invalid method");
    }
}