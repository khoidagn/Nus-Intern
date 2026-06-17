const display = document.getElementById('display');
function appendValue(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = '0';
}