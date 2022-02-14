// pin Genarate
function pinGenarate() {
    const getPin = Math.round(Math.random() * 10000);
    const pinString = getPin + '';
    if (pinString.length == 4) {
        return getPin;
    }
    else {
        return pinGenarate();
    }
}

function genaratePin() {
    const pin = pinGenarate();
    const displayPin = document.getElementById('display-pin').value = pin;
    // console.log(getPin);
}
// calcultator typed
document.getElementById('calc-button').addEventListener('click', function (Event) {
    const calcInput = Event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    if (isNaN(calcInput)) {
        if (calcInput == 'C') {
            typedNumbers.value = '';
        }
    }
    else {

        const prevuiousNumber = typedNumbers.value;
        const updateNumbers = prevuiousNumber + calcInput;
        typedNumbers.value = updateNumbers;
    }

})
// submit for match
function verifyPin() {
    const Pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;
    const right = document.getElementById('right-notify');
    const wrong = document.getElementById('wrong-notify');
    if (Pin == typed) {
        right.style.display = 'block';
        wrong.style.display = 'none';
    }
    else {

        wrong.style.display = 'block';
        right.style.display = 'none';
    }
}