const calorieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories',
        data: [2000, 1800, 1700, 1900, 2100, 2000, 1800],
        fill: false,
        lineTension: 0,
        borderColor: 'rgba(128,0,128,1)',
        backgroundColor: 'rgba(128,0,128,0.3)',
        options: {
          plugins: {
            legend: {
              color: 'rgba(0,0,0,1)'
            }
          }
        }
      },
    ],
  };
  
const calorieCtx = document.getElementById('calorie-chart').getContext('2d');
new Chart(calorieCtx, {
  type: 'line',
  data: calorieData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    lineTension: 0,
  },
});
