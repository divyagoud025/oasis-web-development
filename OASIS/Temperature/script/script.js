function convertTemperature() {
    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let resultDiv = document.getElementById("result");

    if (isNaN(temp) || temp === "") {
        alert("Please enter a valid number");
        return;
    }

    temp = parseFloat(temp);
    let result = "";

    switch (unit) {
        case "Celsius":
            result = `${(temp * 9) / 5 + 32} °F | ${temp + 273.15} K`;
            break;
        case "Fahrenheit":
            result = `${((temp - 32) * 5) / 9} °C | ${((temp - 32) * 5) / 9 + 273.15} K`;
            break;
        case "Kelvin":
            result = `${temp - 273.15} °C | ${(temp - 273.15) * 9 / 5 + 32} °F`;
            break;
        default:
            result = "Invalid Unit";
    }

    resultDiv.innerHTML = `Converted Temperature: ${result}`;
}
s