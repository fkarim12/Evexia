const greenPercentage = parseInt(localStorage.getItem('greenPercentage')) || 33;
const yellowPercentage = parseInt(localStorage.getItem('yellowPercentage')) || 33;
const redPercentage = parseInt(localStorage.getItem('redPercentage')) || 33;

const pieChart = document.getElementById('pieChart');
const percentageDisplay = document.getElementById('percentageDisplay');

function updatePieChart() {
    const totalPercentage = greenPercentage + yellowPercentage + redPercentage;
    const greenPercentageValue = (greenPercentage / totalPercentage) * 100;
    const yellowPercentageValue = (yellowPercentage / totalPercentage) * 100;
    const redPercentageValue = (redPercentage / totalPercentage) * 100;

    pieChart.style.background = `conic-gradient(
      from 0deg,
      palegreen ${greenPercentageValue}%,
      lightgoldenrodyellow ${greenPercentageValue}% ${greenPercentageValue + yellowPercentageValue}%,
      lightcoral ${greenPercentageValue + yellowPercentageValue}% ${greenPercentageValue + yellowPercentageValue + redPercentageValue}%
    )`;

    const selectedPercentage = greenPercentage;
    percentageDisplay.textContent = `Selected Portion: ${selectedPercentage}%`;
}

// Call updatePieChart() on page load
updatePieChart();
