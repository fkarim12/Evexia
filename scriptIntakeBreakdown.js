const bluePercentage = parseInt(localStorage.getItem('bluePercentage')) || 33;
const brownPercentage = parseInt(localStorage.getItem('brownPercentage')) || 33;
const redPercentage = parseInt(localStorage.getItem('redPercentage')) || 33;

const pieChart = document.getElementById('pieChart');
const bluePercentageDisplay = document.getElementById('bluePercentageDisplay');
const brownPercentageDisplay = document.getElementById('brownPercentageDisplay');
const redPercentageDisplay = document.getElementById('redPercentageDisplay');

function updatePieChart() {
    const totalPercentage = bluePercentage + brownPercentage + redPercentage;

    // Calculate angles for each segment
    const blueAngle = (bluePercentage / totalPercentage) * 360;
    const brownAngle = (brownPercentage / totalPercentage) * 360;
    const redAngle = (redPercentage / totalPercentage) * 360;

    // Apply CSS styles to create pie chart segments
    pieChart.style.background = `conic-gradient(
      from 0deg,
      steelblue 0deg ${blueAngle}deg,
      sienna ${blueAngle}deg ${blueAngle + brownAngle}deg,
      darkorange ${blueAngle + brownAngle}deg ${blueAngle + brownAngle + redAngle}deg
    )`;

    bluePercentageDisplay.innerHTML = `<strong>${bluePercentage}%</strong>`;
    brownPercentageDisplay.innerHTML = `<strong>${brownPercentage}%</strong>`;
    redPercentageDisplay.innerHTML = `<strong>${redPercentage}%</strong>`;
    
}

// Call updatePieChart() on page load
updatePieChart();
