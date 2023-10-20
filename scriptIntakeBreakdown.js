// script.js

const pieChart = document.getElementById('pieChart');
const percentageDisplay = document.getElementById('percentageDisplay');

pieChart.addEventListener('click', function (event) {
  const rect = pieChart.getBoundingClientRect();
  const angle = Math.atan2(event.clientY - rect.top - pieChart.clientHeight / 2, event.clientX - rect.left - pieChart.clientWidth / 2);
  let percentage = ((angle + Math.PI) / (2 * Math.PI) * 100).toFixed(2);
  if (percentage < 0) {
    percentage = 100 + parseFloat(percentage);
  }
  percentageDisplay.textContent = `Selected Portion: ${percentage}%`;
});
