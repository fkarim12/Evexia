function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
}

function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

//click event listener for the profile image
var profilePic = document.getElementById("profilePic");
profilePic.addEventListener("click", function() {
    showNotification();
});
