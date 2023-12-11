const sections = document.querySelectorAll('.section');

const carboPercent = parseInt(localStorage.getItem('carboPercent')) || 33;
const proteinPercent = parseInt(localStorage.getItem('proteinPercent')) || 33;
const fatPercent = parseInt(localStorage.getItem('fatPercent')) || 33;

const pieChart = document.getElementById('pieChart');
const carboPercentageDisplay = document.getElementById('carboPercentageDisplay');
const proteinPercentageDisplay = document.getElementById('proteinPercentageDisplay');
const fatPercentageDisplay = document.getElementById('fatPercentageDisplay');

function updateColors() {
  // Update the colors in the updateColors function
  const steelblueColor = "#648FFF";
  const rosybrownColor = "#DC267F";
  const darkorangeColor = "#FFB000";

  sections[0].style.backgroundColor = steelblueColor;
  sections[1].style.backgroundColor = rosybrownColor;
  sections[2].style.backgroundColor = darkorangeColor;

  updatePieChart();
}

// Call updateColors on page load
updateColors();


function updatePieChart() {
  const totalPercentage = carboPercent + proteinPercent + fatPercent;

  const blueAngle = (carboPercent / totalPercentage) * 360;
  const brownAngle = (proteinPercent / totalPercentage) * 360;
  const redAngle = (fatPercent / totalPercentage) * 360;

  // Set pie chart colors dynamically
  pieChart.style.background = `conic-gradient(
    from 0deg,
    ${getComputedStyle(sections[0]).backgroundColor} 0deg ${blueAngle}deg,
    ${getComputedStyle(sections[1]).backgroundColor} ${blueAngle}deg ${blueAngle + brownAngle}deg,
    ${getComputedStyle(sections[2]).backgroundColor} ${blueAngle + brownAngle}deg ${blueAngle + brownAngle + redAngle}deg
  )`;

  carboPercentageDisplay.innerHTML = `<strong>${carboPercent}%</strong>`;
  proteinPercentageDisplay.innerHTML = `<strong>${proteinPercent}%</strong>`;
  fatPercentageDisplay.innerHTML = `<strong>${fatPercent}%</strong>`;
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
