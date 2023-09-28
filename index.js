function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let result;

    if (inputUnit === 'celsius') {
        result = (inputTemp * 9/5) + 32;
        document.getElementById('result').innerHTML = `${inputTemp} Celsius is ${result} Fahrenheit`;
    } else if (inputUnit === 'fahrenheit') {
        result = (inputTemp - 32) * 5/9;
        document.getElementById('result').innerHTML = `${inputTemp} Fahrenheit is ${result} Celsius`;
    }
}
