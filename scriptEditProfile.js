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

function showKeyboard(event, imageId) {
    event.stopPropagation(); // Stop the event from propagating to document.body
    var keyboardImage = document.getElementById(imageId);
    keyboardImage.style.display = 'block';
    
    // Get the h3 element by its ID
    var h3Element = document.getElementById('h3Element');
    
    // Add the class to the h3 element when showKeyboard is true
    h3Element.classList.add('scrollable-h3');
    
    // Calculate the distance to scroll based on the target pixel value
    var scrollDistance = Math.max(0, keyboardImage.getBoundingClientRect().top - 640);

    // Scroll the page up until the bottom of the page reaches pixel 640
    window.scrollBy(0, -scrollDistance);
}

// Hide the keyboard image and remove the class when the screen is clicked elsewhere
document.body.addEventListener('click', function (event) {
    if (event.target.id !== 'keyboardImage') {
        document.getElementById('keyboardImage').style.display = 'none';
        
        // Get the h3 element by its ID
        var h3Element = document.getElementById('h3Element');
        
        // Remove the class from the h3 element when showKeyboard is false
        h3Element.classList.remove('scrollable-h3');
    }
});
