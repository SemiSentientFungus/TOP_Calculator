//calling code:
let sum = 0;
operate("ivide", 2, 100);
console.log(sum);
//functions

function add(num1, num2){
    sum = num1 + num2;
}

function subtract(num1, num2){
    sum = num1 - num2;
}

function multiply(num1, num2){
    sum = num1 * num2;
}

function divide(num1, num2){
    sum = num1 / num2;
}

function operate(opp, num1, num2){
    if (opp == "add"){
        add(num1, num2);
    }
    else if (opp =="subtract"){
        subtract(num1, num2);
    }
    else if (opp =="multiply"){
        multiply(num1, num2);
    }
    else if (opp =="divide"){
        divide(num1, num2);
    }
    else{
        console.log("not valid :c");
    }
}