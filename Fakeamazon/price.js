let prices = {
    kindle: 8.99,
    hardcover: 34.43,
    paperback: 16.99
};

let selectedFormat = "paperback";

function updateDisplay() {
    document.getElementById("kindlePrice").textContent = "$" + prices.kindle.toFixed(2);
    document.getElementById("hardcoverPrice").textContent = "$" + prices.hardcover.toFixed(2);
    document.getElementById("paperbackPrice").textContent = "$" + prices.paperback.toFixed(2);
    document.getElementById("totalPrice").textContent = "$" + prices[selectedFormat].toFixed(2);
}

function selectFormat(format) {
    selectedFormat = format;
    updateDisplay();
}

function buyBook() {
    if (selectedFormat === "paperback") {
        prices.paperback += 1.25;
    } else if (selectedFormat === "hardcover") {
        prices.hardcover += 2.00;
    } else {
        prices.kindle += 0.50;
    }

    updateDisplay();
}

setInterval(function () {
    prices.paperback += Math.random() * 0.40;
    prices.hardcover += Math.random() * 0.60;
    updateDisplay();
}, 3000);

updateDisplay();