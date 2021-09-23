
//Read input
function readInput(operand) {
    let myInput = document.getElementById("user_input").value;
    let myInput2 = document.getElementById("user_input2").value;

    let myAnswer = 0;

    if (!isNaN(myInput) && !isNaN(myInput2)) {
        switch (operand) {
            case "+":
                myAnswer = addNumbers(myInput, myInput2);
                break;
            case "-":
                myAnswer = subtractNumbers(myInput, myInput2);
                break;
            case "*":
                myAnswer = multiplyNumbers(myInput, myInput2);
                break;
            case "/":
                myAnswer = divideNumbers(myInput, myInput2);
                break;
            default:
                myAnswer = addNumbers(myInput, myInput2);
        }
        document.getElementById("display").innerHTML = myAnswer;
    } else {
        return document.getElementById("display").innerHTML = "Please enter valid numbers.";
    }
}

//All math operator functions:
const addNumbers = (x,y) => parseInt(x) + parseInt(y);

const subtractNumbers = (x,y) => parseInt(x) - parseInt(y);

const multiplyNumbers = (x,y) => parseFloat(x) * parseFloat(y);

const divideNumbers = (x,y) => parseFloat(x) / parseFloat(y);