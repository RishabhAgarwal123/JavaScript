let result = '';
const userInput = document.getElementById('userInput');
const calculatedOutput = document.getElementById('calculatedOutput');

const calcad = function (value) {
    result += value;
    userInput.value = result;
}

const removeCh = function() {
    result = result.substring(0, result.length - 1);
    userInput.value = result;
}

const execm = function () {
    if (result.length === 0 || result === '') {
        alert('Needs and input');
        return;
    }

    try {
        calculatedOutput.value = eval(result);
    } catch (err) {
        alert('Invalid Input');
    }
}

const reset = function () {
    userInput.value = '';
    calculatedOutput.value = '';
    result = '';
}