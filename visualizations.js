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

document.addEventListener("DOMContentLoaded", function () {

  var weightChart;

  new Chart( 
    document.getElementById('weightChart').getContext('2d'), 
    {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          color: 'rgba(204,85,0,1)'
        }
      }
    },
    data: {
      labels: [],
      datasets: [
        {
          label: 'Weight in lbs',
          data: [],
          fill: false,
          lineTension: 0,
          borderColor: 'rgba(204,85,0,1)',
          backgroundColor: 'rgba(204,85,0,0.3)'
        },
      ],
    }
  });

  function updateChart() {
    var month = document.getElementById("monthSelect").value;
    var weight = parseFloat(document.getElementById("weightInput").value);

    if (isNaN(weight)) {
      alert("Please enter a valid weight.");
      return;
    }

    weightChart.data.labels.push(month);
    weightChart.data.datasets[0].data.push(weight);
    weightChart.update();

    // Clear input fields
    document.getElementById("monthSelect").value = "";
    document.getElementById("weightInput").value = "";
    }

  document.getElementById("enter").addEventListener("click", updateChart);

});