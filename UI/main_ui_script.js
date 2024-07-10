const imageElement = document.getElementById('robot-image');
        const imageList = [
            "Robo_off.png",
            "Robo_onn.png", ];
        let currentImageIndex = 0;
        function loadAnotherImage() {
            currentImageIndex = (currentImageIndex + 1) % imageList.length;
            imageElement.src = imageList[currentImageIndex];
        }

function exitAssistant() {
    // Replace 'login.html' with the actual URL of your login page
    window.location.href = 'login.html';
}

function updateTime1() {
    const dateTimeElement = document.getElementById('date-time1');
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDateTime;
    
}

// Call the function to update date and time
updateTime1();
// Set interval to update date and time every second
setInterval(updateTime1, 1000);

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the username from localStorage
    var loggedInUsername = localStorage.getItem("loggedInUsername");

    // Update the heading with the loggedInUsername
    if (loggedInUsername) {
        var welcomeHeading = document.getElementById("user");
        welcomeHeading.textContent = loggedInUsername;
    }
    else {
    // Redirect to the login page if the user is not logged in
    window.location.href = 'login.html';
}
});
