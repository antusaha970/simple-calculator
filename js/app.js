let inputStr = "";
let mainExpression = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function (event) {
        if (event.target.innerText == "=") {
            if (mainExpression == "") {
                alert("Please enter number and operator");
            }
            else {
                inputStr = eval(mainExpression);
                mainExpression = eval(mainExpression);
            }
        }
        else if (event.target.innerText == "AC") {
            inputStr = "";
            mainExpression = "";
        }
        else if (event.target.innerText == "^") {
            inputStr = inputStr + event.target.innerText;
            mainExpression = mainExpression + "**";
        }
        else {
            inputStr = inputStr + event.target.innerText;
            mainExpression = mainExpression + event.target.innerText;
        }
        document.querySelector('.input').value = inputStr;
    })
})
