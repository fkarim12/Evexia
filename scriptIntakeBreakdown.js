const sections = document.querySelectorAll('.section');

const bluePercentage = parseInt(localStorage.getItem('bluePercentage')) || 33;
const brownPercentage = parseInt(localStorage.getItem('brownPercentage')) || 33;
const redPercentage = parseInt(localStorage.getItem('redPercentage')) || 33;

const pieChart = document.getElementById('pieChart');
const bluePercentageDisplay = document.getElementById('bluePercentageDisplay');
const brownPercentageDisplay = document.getElementById('brownPercentageDisplay');
const redPercentageDisplay = document.getElementById('redPercentageDisplay');

let notcolorblindMode = true; // Default mode is not colorblind

const colorblindToggle = document.getElementById("colorblind");

colorblindToggle.addEventListener("click", function () {
  notcolorblindMode = !notcolorblindMode; // Toggle colorblind mode
  updateColors(); // Update colors and pie chart
});


function updateColors() {
  const steelblueColor = notcolorblindMode ? "lightblue" : "steelblue";
  const siennaColor = notcolorblindMode ? "palegoldenrod" : "sienna";
  const darkorangeColor = notcolorblindMode ? "lightsalmon" : "darkorange";

  sections[0].style.backgroundColor = steelblueColor;
  sections[1].style.backgroundColor = siennaColor;
  sections[2].style.backgroundColor = darkorangeColor;

  updatePieChart();
}

// Call updateColors on page load
updateColors();


function updatePieChart() {
  const totalPercentage = bluePercentage + brownPercentage + redPercentage;

  const blueAngle = (bluePercentage / totalPercentage) * 360;
  const brownAngle = (brownPercentage / totalPercentage) * 360;
  const redAngle = (redPercentage / totalPercentage) * 360;

  // Set pie chart colors dynamically
  pieChart.style.background = `conic-gradient(
    from 0deg,
    ${getComputedStyle(sections[0]).backgroundColor} 0deg ${blueAngle}deg,
    ${getComputedStyle(sections[1]).backgroundColor} ${blueAngle}deg ${blueAngle + brownAngle}deg,
    ${getComputedStyle(sections[2]).backgroundColor} ${blueAngle + brownAngle}deg ${blueAngle + brownAngle + redAngle}deg
  )`;

  bluePercentageDisplay.innerHTML = `<strong>${bluePercentage}%</strong>`;
  brownPercentageDisplay.innerHTML = `<strong>${brownPercentage}%</strong>`;
  redPercentageDisplay.innerHTML = `<strong>${redPercentage}%</strong>`;
}

updatePieChart();



const learnMoreButton = document.getElementById("learnMoreButton");
const popOutContainer = document.getElementById("popOutContainer");
const closeButton = document.getElementById("closeButton");

learnMoreButton.addEventListener("click", function () {
  //when button is clicked
  popOutContainer.style.display = "block";
});

closeButton.addEventListener("click", function () {
  //when the cross mark is clicked
  popOutContainer.style.display = "none";
});

window.addEventListener("click", function (event) {
  //close window
  if (
    event.target !== learnMoreButton &&
    event.target !== closeButton &&
    !popOutContainer.contains(event.target)
  ) {
    popOutContainer.style.display = "none";
  }
});
