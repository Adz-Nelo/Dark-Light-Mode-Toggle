const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon')

function store(value) {
    localStorage.setItem('dark-mode', value)
}

function load() {
    const dark_mode = localStorage.getItem('dark-mode')

    if(!dark_mode) {
        store(false)
        icon.classList.add('img/clear.png')
    } else if (dark_mode == 'true') {
        body.classList.add('dark-mode')
        icon.classList.add('img/crescent-moon.png') 
    } else if (dark_mode == 'false') {
        icon.classList.add('img/clear.png')
    } 
}

load(); 

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    icon.classList.add('animated')

    store(body.classList.contains('dark-mode'))

    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('img/clear.png')
        icon.classList.remove('img/crescent-moon.png')
    } else {
        icon.classList.remove('img/crescent-moon.png')
        icon.classList.add('img/clear.png')
    }

    setTimeout(() => {
        icon.classList.remove('animated')
    }, 500);
})