const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const imgUrl = e.target.src;
    lightbox.innerHTML = `<img src="${imgUrl}" alt="Lightbox Image">`;
    lightbox.style.display = 'block';
  }
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
const video = document.getElementById('myVideo');

  // Pause the video when the page loads
  video.pause();

  // Play the video on hover
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  // Pause the video when the mouse leaves the video area
  video.addEventListener('mouseleave', () => {
    video.pause();
  });
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
