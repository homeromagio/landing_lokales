const hamburger = document.querySelector('.navbar-hamburger');
const menuContainer = document.querySelector('.menu-container');
const menuOverlay = document.querySelector('.menu-overlay');
const closeButton = document.querySelector('.menu-close');

function toggleMenu() {
  menuContainer.classList.toggle('active');
  menuOverlay.style.display = menuContainer.classList.contains('active') ? 'block' : 'none';
}

// Cerrar menú al hacer clic en cualquier botón del menú
document.querySelectorAll('.menu-container a, .menu-container button').forEach(item => {
  item.addEventListener('click', () => {
    if(menuContainer.classList.contains('active')) {
      toggleMenu();
    }
  });
});

hamburger.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth > 642 && menuContainer.classList.contains('active')) {
    toggleMenu();
  }
});