const greenPercentageInput = document.getElementById('greenPercentage');
const yellowPercentageInput = document.getElementById('yellowPercentage');
const redPercentageInput = document.getElementById('redPercentage');
const pieChart = document.getElementById('pieChart');
const percentageDisplay = document.getElementById('percentageDisplay');

function updatePieChart() {
    const totalPercentage = parseFloat(greenPercentageInput.value) + parseFloat(yellowPercentageInput.value) + parseFloat(redPercentageInput.value);
    const greenPercentage = (parseFloat(greenPercentageInput.value) / totalPercentage) * 100;
    const yellowPercentage = (parseFloat(yellowPercentageInput.value) / totalPercentage) * 100;
    const redPercentage = (parseFloat(redPercentageInput.value) / totalPercentage) * 100;

    pieChart.style.background = `conic-gradient(
      from 0deg,
      palegreen ${greenPercentage}%,
      lightgoldenrodyellow ${greenPercentage}% ${greenPercentage + yellowPercentage}%,
      lightcoral ${greenPercentage + yellowPercentage}% ${greenPercentage + yellowPercentage + redPercentage}%
    )`;

    const selectedPercentage = greenPercentageInput.value;
    percentageDisplay.textContent = `Selected Portion: ${selectedPercentage}%`;
}

greenPercentageInput.addEventListener('input', updatePieChart);
yellowPercentageInput.addEventListener('input', updatePieChart);
redPercentageInput.addEventListener('input', updatePieChart);

// Initial update
updatePieChart();
