let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

let a = Number(num1);
let b = Number(num2);

let operation = prompt("Choose operation: +, -, *, /");

let result = (operation == "+") ? a + b :
    (operation == "-") ? a - b :
        (operation == "*") ? a * b :
            (operation == "/") ? a / b :
                "Invalid operation";

alert("Result: " + result);