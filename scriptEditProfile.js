// Retrieve data from localStorage and display it in the input fields
window.onload = function () {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('age').value = localStorage.getItem('age') || '';
    document.getElementById('height').value = localStorage.getItem('height') || '';
    document.getElementById('weight').value = localStorage.getItem('weight') || '';
    document.getElementById('goalWeight').value = localStorage.getItem('goalWeight') || '';
    document.getElementById('goals').value = localStorage.getItem('goals') || '';

    // Get the close button element
    var closeButton = document.getElementById('closeButton');

    // Attach a click event listener to the close button
    closeButton.addEventListener('click', function() {
        var popOutContainer = document.getElementById('popOutContainer');
        popOutContainer.style.display = 'none'; // Hide the pop-up
    });
};


function saveProfile() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var goalWeight = document.getElementById('goalWeight').value;
    var goals = document.getElementById('goals').value;


    // Check name format
    if (!name.includes(' ')) {
        showError(1);
        return;
    }

    // Check email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(2);
        return;
    }

    // Check age range
    if (age < 0 || age > 110) {
        showError(3);
        return;
    }

    // Check height format (number' number")
    var heightRegex = /^\d+'\s?\d+"$/;
    if (!heightRegex.test(height)) {
        showError(4);
        return;
    }

    // Check weight format (only numbers)
    var weightRegex = /^\d+$/;
    if (!weightRegex.test(weight)) {
        showError(5);
        return;
    }

    // Check goal weight format (only numbers)
    var goalWeightRegex = /^\d+$/;
    if (!goalWeightRegex.test(goalWeight)) {
       showError(5);
       return;
    }

    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
    localStorage.setItem('goalWeight', goalWeight);
    localStorage.setItem('goals', goals);

    // Redirect to the user profile page
    window.location.href = 'userProfile.html';
}

function showError(errorCode) {
    var errorMessage = '';
    switch (errorCode) {
        case 1:
            errorMessage = 'Please enter your first and last name.';
            break;
        case 2:
            errorMessage = 'Please enter a valid email.';
            break;
        case 3:
            errorMessage = 'Please enter a valid age between 0 and 110.';
            break;
        case 4:
            errorMessage = 'Please enter height in the format (feet\' inches").';
            break;
        case 5:
            errorMessage = 'Please enter weight using only numbers.';
            break;
        default:
            errorMessage = 'An error occurred.';
            break;
    }

    var popOutContent = document.querySelector('.pop-out-content');
    popOutContent.textContent = errorMessage;

    var popOutContainer = document.getElementById('popOutContainer');
    popOutContainer.style.display = 'block';
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

