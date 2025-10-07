const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

function store(value) {
    localStorage.setItem('dark-mode', value);
}

function load() {
    const darkMode = localStorage.getItem('dark-mode');

    if (darkMode === 'true') {
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

    // Toggle icons
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