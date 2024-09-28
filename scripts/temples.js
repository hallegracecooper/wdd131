const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    
    if (navMenu.classList.contains('visible')) {
        hamburgerBtn.textContent = 'X';
    } else {
        hamburgerBtn.textContent = '☰';
    }
});
