const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Using in-memory storage instead of localStorage
let darkModeState = false;

function store(value) {
    darkModeState = value;
}

function load() {
    if (darkModeState) {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

load();

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    icon.classList.add('animated');

    const isDarkMode = body.classList.contains('dark-mode');
    store(isDarkMode);

    if (isDarkMode) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500);
});