const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('.nav-menu');

// Abrir/Fechar Menu
menuButton.addEventListener('click', (e) => {
  e.stopPropagation(); 
  navMenu.classList.toggle('active');
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});