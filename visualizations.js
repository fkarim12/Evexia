const calorieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calorie Intake of the Last 9 Days',
        data: [2000, 1800, 1700, 1900, 2100, 2000, 1800],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };
  
  const weightData = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Weight Progress in the Last Year',
        data: [185, 180, 190, 185, 180, 175, 195, 185, 165, 160, 180, 175],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const sleepData = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Average Sleep in the Last Year(in hours)',
        data: [8, 6, 7, 7, 8, 6, 5, 5, 7, 8, 6, 7],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
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
  
  const weightCtx = document.getElementById('weight-chart').getContext('2d');
  new Chart(weightCtx, {
    type: 'line',
    data: weightData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      lineTension: 0,
    },
  });

  const sleepCtx = document.getElementById('sleep-chart').getContext('2d');
  new Chart(sleepCtx, {
    type: 'line',
    data: sleepData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      lineTension: 0,
    },
  });
  