const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('nav-links-holder');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden'); 
    if (navMenu.classList.contains('hidden')) {
        hamburgerBtn.textContent = '☰';
    } else {
        hamburgerBtn.textContent = 'X';
    }
});
