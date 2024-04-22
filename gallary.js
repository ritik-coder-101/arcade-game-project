const colors = ["red", "blue", "green", "purple", "orange", "pink", "brown", "teal", "maroon", "navy", "olive", "cyan", "magenta", "lime", "indigo", "silver", "gold", "crimson", "plum", "turquoise", "salmon", "orchid", "coral", "steelblue"];

function changeColor() {
    const h1 = document.getElementById("color-changing-text");
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (h1.style.color === newColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    h1.style.color = newColor;
}

setInterval(changeColor, 1000);

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

const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function scaleImage() {
    images[currentIndex].style.transition = 'transform 0.5s ease-in-out';
    images[currentIndex].style.transform = 'scale(1.2)';
    setTimeout(() => {
        images[currentIndex].style.transition = 'transform 0.5s ease-in-out';
        images[currentIndex].style.transform = 'scale(1)';
        currentIndex = (currentIndex + 1) % images.length;
    }, 500); // Change image every 2 seconds (2000ms)
}

setInterval(scaleImage, 2000); // Scale image every 4 seconds (4000ms)

function toggleDarkMode() {
    const lightMode = document.getElementById('light-mode');
    const darkMode = document.getElementById('dark-mode');

    lightMode.disabled = !lightMode.disabled;
    darkMode.disabled = !darkMode.disabled;
}
function toggleDarkMode() {
    const lightMode = document.getElementById('light-mode');
    const darkMode = document.getElementById('dark-mode');

    if (lightMode.disabled) {
        lightMode.disabled = false;
        darkMode.disabled = true;
        // Save user preference to local storage
        localStorage.setItem('mode', 'light');
    } else {
        lightMode.disabled = true;
        darkMode.disabled = false;
        // Save user preference to local storage
        localStorage.setItem('mode', 'dark');
    }
}

// Set initial mode based on user preference
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    toggleDarkMode();
}



