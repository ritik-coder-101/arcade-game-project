document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var gmail = document.getElementById("gmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Check if password and confirm password match
    var errorMessage = document.getElementById("popup");
    if (password === confirmPassword) {
        // Set the first name in localStorage
        localStorage.setItem("firstName", firstName);

        // Redirect to anotherpage.html
        window.location.href = "home.html";
    } else {
        // Show a popup indicating that passwords do not match
        errorMessage.textContent = "Passwords do not match. Please try again.";
        errorMessage.style.display = "block";
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 5000);
    }
});



