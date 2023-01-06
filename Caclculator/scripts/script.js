function calculate() {
    let firstOperand = document.getElementById('FirstOperand');
    let secondOperand = document.getElementById('SecondOperand');
    let operation = document.getElementById('OperationSelection');
    
    let resultField = document.querySelector("body > ul");
    let firstElement = document.querySelector("body > ul > li");

    let el = document.createElement("li");
    el.textContent = getResult(firstOperand.value, secondOperand.value, operation.value);

    console.log(el.textContent);
    
    resultField.insertBefore(el, firstElement);
}

function getResult(firstOperand, secondOperand, operation) {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    
    switch (operation) {
        case '+':
            return `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
        case '-':
            return `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
        case '*':
            return `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
        case '/':
            return `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
    }
}