const calorieData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
      {
          label: 'Calories',
          data: [2000, 1830, 1975, 1900, 2100, 2000, 1800],
          backgroundColor: 'rgba(128,0,128,0.3)',
          borderColor: 'rgba(128,0,128,1)',
          borderWidth: 1,
      },
  ],
};

const calorieCtx = document.getElementById('calorie-chart').getContext('2d');
const calorieChart = new Chart(calorieCtx, {
  type: 'bar',
  data: calorieData,
  options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
              fontSize: 21
          }
        }],
          yAxes: [{
            ticks: {
                fontSize: 21
            }
          }]
      },
      onClick: (event, elements) => {
          if (elements.length > 0) {
              const index = elements[0].index;
              const caloriesClicked = calorieData.datasets[0].data[index];
          }
      },
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

const learnMoreButton = document.getElementById("learnMoreButton");
const popOutContainer = document.getElementById("popOutContainer");
const closeButton = document.getElementById("closeButton");

document.addEventListener("DOMContentLoaded", function() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').setAttribute('max', today);

  // const storedData = localStorage.getItem('sleepData');
  // if (storedData) {
  //   const parsedData = JSON.parse(storedData);
  //   sleepData.labels = parsedData.labels;
  //   sleepData.datasets[0].data = parsedData.datasets[0].data;
  //   sleepTrackerChart.update();
  // }

});

learnMoreButton.addEventListener("click", function () {
  //when button is clicked
  popOutContainer.style.display = "block";
});

closeButton.addEventListener("click", function () {
  //when the cross mark is clicked
  popOutContainer.style.display = "none";
});

window.addEventListener("click", function (event) {
  // Close window when clicking outside of it
  if (
    event.target !== closeButton &&
    event.target !== learnMoreButton &&
    !popOutContainer.contains(event.target)
  ) {
    popOutContainer.style.display = "none";
  }
});
