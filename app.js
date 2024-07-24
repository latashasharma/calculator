let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let buttonText = event.target.innerText;
        
        if (buttonText === '=') {
            string = String(eval(string));
            inputBox.value = string;
        } else if (buttonText === 'AC') {
            string = '';
            inputBox.value = string;
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (button.id === 'plusMinus') {
            string = String(-eval(string));
            inputBox.value = string;
        } else {
            string += buttonText;
            inputBox.value = string;
        }
    });
});
