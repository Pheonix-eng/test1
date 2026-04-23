const display = document.getElementById("display");
const modeSelect = document.getElementById("modeSelect");
const scientificButtons = document.querySelectorAll(".scientific-btn");
const messageBox = document.getElementById("messageBox");
const standardScientificArea = document.getElementById("standardScientificArea");
const programmerArea = document.getElementById("programmerArea");
const converterArea = document.getElementById("converterArea");

function appendValue(value) {
    display.value += value;
}

function appendScientific(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendPercent() {
    display.value += "%";
}

function square(x) {
    return x * x;
}

function sin(x) {
    return Math.sin(x * Math.PI / 180);
}

function cos(x) {
    return Math.cos(x * Math.PI / 180);
}

function tan(x) {
    return Math.tan(x * Math.PI / 180);
}

function sqrt(x) {
    return Math.sqrt(x);
}

function log(x) {
    return Math.log10(x);
}

function ln(x) {
    return Math.log(x);
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/pi/g, "Math.PI");
        expression = expression.replace(/\be\b/g, "Math.E");
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        expression = expression.replace(/\^/g, "**");

        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function changeMode() {
    let selectedMode = modeSelect.value;

    if (selectedMode === "standard") {
        standardScientificArea.classList.remove("hidden");
        programmerArea.classList.add("hidden");
        converterArea.classList.add("hidden");

        scientificButtons.forEach(function(button) {
            button.classList.add("hidden");
        });

        messageBox.textContent = "Standard calculator mode";
        clearDisplay();
    }
    else if (selectedMode === "scientific") {
        standardScientificArea.classList.remove("hidden");
        programmerArea.classList.add("hidden");
        converterArea.classList.add("hidden");

        scientificButtons.forEach(function(button) {
            button.classList.remove("hidden");
        });

        messageBox.textContent = "Scientific calculator mode";
        clearDisplay();
    }
    else if (selectedMode === "programmer") {
        standardScientificArea.classList.add("hidden");
        programmerArea.classList.remove("hidden");
        converterArea.classList.add("hidden");

        messageBox.textContent = "Programmer calculator mode";
        clearDisplay();
    }
    else if (selectedMode === "converter") {
        standardScientificArea.classList.add("hidden");
        programmerArea.classList.add("hidden");
        converterArea.classList.remove("hidden");

        messageBox.textContent = "Unit converter mode";
        clearDisplay();
        updateConverterUnits();
    }
}

function convertProgrammer() {
    const input = parseInt(document.getElementById("programmerInput").value);

    if (isNaN(input)) {
        document.getElementById("binaryResult").textContent = "-";
        document.getElementById("octalResult").textContent = "-";
        document.getElementById("decimalResult").textContent = "-";
        document.getElementById("hexResult").textContent = "-";
        return;
    }

    document.getElementById("binaryResult").textContent = input.toString(2);
    document.getElementById("octalResult").textContent = input.toString(8);
    document.getElementById("decimalResult").textContent = input.toString(10);
    document.getElementById("hexResult").textContent = input.toString(16).toUpperCase();
}

function updateConverterUnits() {
    const type = document.getElementById("converterType").value;
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    let units = [];

    if (type === "length") {
        units = ["meters", "kilometers", "miles", "feet"];
    } else if (type === "weight") {
        units = ["kilograms", "grams", "pounds"];
    } else if (type === "temperature") {
        units = ["celsius", "fahrenheit", "kelvin"];
    }

    units.forEach(function(unit) {
        let option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit;
        fromUnit.appendChild(option1);

        let option2 = document.createElement("option");
        option2.value = unit;
        option2.textContent = unit;
        toUnit.appendChild(option2);
    });
}

function convertUnits() {
    const type = document.getElementById("converterType").value;
    const input = parseFloat(document.getElementById("converterInput").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const resultSpan = document.getElementById("converterResult");

    if (isNaN(input)) {
        resultSpan.textContent = "-";
        return;
    }

    let result = input;

    if (type === "length") {
        let meters = input;

        if (from === "kilometers") meters = input * 1000;
        if (from === "miles") meters = input * 1609.34;
        if (from === "feet") meters = input * 0.3048;

        if (to === "kilometers") result = meters / 1000;
        else if (to === "miles") result = meters / 1609.34;
        else if (to === "feet") result = meters / 0.3048;
        else result = meters;
    }

    if (type === "weight") {
        let kilograms = input;

        if (from === "grams") kilograms = input / 1000;
        if (from === "pounds") kilograms = input * 0.453592;

        if (to === "grams") result = kilograms * 1000;
        else if (to === "pounds") result = kilograms / 0.453592;
        else result = kilograms;
    }

    if (type === "temperature") {
        let celsius = input;

        if (from === "fahrenheit") celsius = (input - 32) * 5 / 9;
        if (from === "kelvin") celsius = input - 273.15;

        if (to === "fahrenheit") result = (celsius * 9 / 5) + 32;
        else if (to === "kelvin") result = celsius + 273.15;
        else result = celsius;
    }

    resultSpan.textContent = result.toFixed(4);
}

changeMode();