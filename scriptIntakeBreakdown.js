const greenPercentage = parseInt(localStorage.getItem('greenPercentage')) || 33;
const yellowPercentage = parseInt(localStorage.getItem('yellowPercentage')) || 33;
const redPercentage = parseInt(localStorage.getItem('redPercentage')) || 33;

const greenPercentageDisplay = document.getElementById('greenPercentageDisplay');
const yellowPercentageDisplay = document.getElementById('yellowPercentageDisplay');
const redPercentageDisplay = document.getElementById('redPercentageDisplay');

function updatePercentageDisplays() {
    greenPercentageDisplay.textContent = `Green: ${greenPercentage}%`;
    yellowPercentageDisplay.textContent = `Yellow: ${yellowPercentage}%`;
    redPercentageDisplay.textContent = `Red: ${redPercentage}%`;
}

// Call updatePercentageDisplays() on page load
updatePercentageDisplays();
