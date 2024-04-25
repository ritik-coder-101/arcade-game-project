document.addEventListener("DOMContentLoaded", function() {
  // Get the first name from localStorage
  var firstName = localStorage.getItem("firstName");

  // Display the personalized message
  if (firstName) {
      var popup = document.getElementById("popup");
      popup.innerHTML = "Welcome " + firstName + "! Congratulations for logging in.";
      popup.style.display = "block";
      console.log(firstName)

      // Hide the popup after 7 seconds
      setTimeout(function() {
          popup.style.display = "none";
      }, 3000); // 7 seconds = 7000 milliseconds
  }
});
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Initial call to start the slideshow
showSlides();

let slideIndex1 = 0;

function showSlides1() {
    let slides1 = document.getElementsByClassName("background-slide");
    for (let i = 0; i < slides1.length; i++) {
        slides1[i].style.opacity = "0"; // Hide all images
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }
    slides1[slideIndex1 - 1].style.opacity = "1"; // Show the current image
    setTimeout(showSlides1, 10000); // Change image every 10 seconds
}

// Initial call to start the slideshow
showSlides1();
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  let background = document.querySelector('.background-image');
  background.style.top = scrollTop * 0.5 + 'px'; // Adjust the scroll speed by changing the multiplier
});

