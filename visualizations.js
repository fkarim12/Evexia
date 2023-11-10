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


function showKeyboard(event, imageId) {
  event.stopPropagation(); // Stop the event from propagating to document.body
  var keyboardImage = document.getElementById(imageId);
  keyboardImage.style.display = 'block';

  var weightForm = document.getElementById('weightForm');
  weightForm.classList.add('scrollable'); // Add the scrollable class to the form

  // Calculate the distance to scroll based on the target pixel value
  var scrollDistance = Math.max(0, keyboardImage.getBoundingClientRect().top - 640);

  // Scroll the page up until the bottom of the page reaches pixel 640
  window.scrollBy(0, -scrollDistance);
}

// Hide the keyboard image and remove the class when the screen is clicked elsewhere
document.body.addEventListener('click', function (event) {
  if (event.target.id !== 'keyboardImage') {
    document.getElementById('keyboardImage').style.display = 'none';

    var weightForm = document.getElementById('weightForm');
    weightForm.classList.remove('scrollable'); // Remove the scrollable class from the form
  }
});
