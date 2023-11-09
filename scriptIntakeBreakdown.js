const greenPercentage = parseInt(localStorage.getItem('greenPercentage')) || 33;
const yellowPercentage = parseInt(localStorage.getItem('yellowPercentage')) || 33;
const redPercentage = parseInt(localStorage.getItem('redPercentage')) || 33;

const pieChart = document.getElementById('pieChart');
const greenPercentageDisplay = document.getElementById('greenPercentageDisplay');
const yellowPercentageDisplay = document.getElementById('yellowPercentageDisplay');
const redPercentageDisplay = document.getElementById('redPercentageDisplay');

function updatePieChart() {
    const totalPercentage = greenPercentage + yellowPercentage + redPercentage;

    // Calculate angles for each segment
    const greenAngle = (greenPercentage / totalPercentage) * 360;
    const yellowAngle = (yellowPercentage / totalPercentage) * 360;
    const redAngle = (redPercentage / totalPercentage) * 360;

    // Apply CSS styles to create pie chart segments
    pieChart.style.background = `conic-gradient(
      from 0deg,
      limegreen 0deg ${greenAngle}deg,
      yellow ${greenAngle}deg ${greenAngle + yellowAngle}deg,
      tomato ${greenAngle + yellowAngle}deg ${greenAngle + yellowAngle + redAngle}deg
    )`;

    greenPercentageDisplay.textContent = `Green: ${greenPercentage}%`;
    yellowPercentageDisplay.textContent = `Yellow: ${yellowPercentage}%`;
    redPercentageDisplay.textContent = `Red: ${redPercentage}%`;
}

// Call updatePieChart() on page load
updatePieChart();
