const textAboveForm = document.querySelector('.text-above-form');
const fontStyles = ['font-style-1', 'font-style-2', 'font-style-3','font-style-4','font-style-5','font-style-6','font-style-7','font-style-8'];
let currentIndex = 0;

setInterval(() => {
    textAboveForm.classList.remove(fontStyles[currentIndex]); // Remove current font style
    currentIndex = (currentIndex + 1) % fontStyles.length; // Get the next index
    textAboveForm.classList.add(fontStyles[currentIndex]); // Add new font style
}, 3000); // Repeat every 10 seconds (10000 milliseconds)
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