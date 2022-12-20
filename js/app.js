let inputStr = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function (event) {
        if (event.target.innerText == "=") {
            inputStr = eval(inputStr);
        }
        else if (event.target.innerText == "AC") {
            inputStr = "";
        }
        else {
            inputStr = inputStr + event.target.innerText;
        }
        document.querySelector('.input').value = inputStr;
    })
})
