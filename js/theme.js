const themeButton = document.querySelector('.header__theme-button');

function toggleTheme() {
    const html = document.documentElement;

    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
    }
}

themeButton.addEventListener('click', toggleTheme);