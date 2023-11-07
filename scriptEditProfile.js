// Retrieve data from localStorage and display it in the input fields
window.onload = function () {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('age').value = localStorage.getItem('age') || '';
    document.getElementById('weight').value = localStorage.getItem('weight') || '';
    document.getElementById('goalWeight').value = localStorage.getItem('goalWeight') || '';
    document.getElementById('goals').value = localStorage.getItem('goals') || '';
};

function saveProfile() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var goalWeight = document.getElementById('goalWeight').value;
    var goals = document.getElementById('goals').value;

    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);
    localStorage.setItem('weight', weight);
    localStorage.setItem('goalWeight', goalWeight);
    localStorage.setItem('goals', goals);

    // Redirect to the user profile page
    window.location.href = 'userProfile.html';
}

// Hide the keyboard image when the screen is clicked elsewhere
document.body.addEventListener('click', function (event) {
    if (event.target.id !== 'keyboardImage') {
        document.getElementById('keyboardImage').style.display = 'none';
    }
});

// Function to show the keyboard image
function showKeyboard(imageId) {
    var keyboardImage = document.getElementById(imageId);
    keyboardImage.style.display = 'block';
}
