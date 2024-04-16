document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var firstName = document.getElementById("fname").value;
    var popup = document.getElementById("popup");
    popup.textContent = "Welcome " + firstName + "! Congratulations for logging in.";
    popup.style.display = "block"; // Show the pop-up
    setTimeout(function() {
        popup.style.display = "none"; // Hide the pop-up after 3 seconds
    }, 7000);
});
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
//     localStorage.setItem("showPopup", "true"); // Set flag to show popup
//     window.location.href = "index.html"; // Redirect to another HTML file
// });
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the first name from the form
    var firstName = document.getElementById("fname").value;

    // Set the first name in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("showPopup", "true");

    // Redirect to anotherpage.html
    window.location.href = "index.html";
});


